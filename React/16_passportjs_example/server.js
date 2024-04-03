const express = require("express");
const mongoose = require("mongoose");
const apiroute = require("./routes/apiroute");
const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoStore = require("connect-mongo");

let app = express();

app.use(express.json());

// MONGO CONNECTION
const mongo_url = process.env.MONGODB_URL;
const mongo_username = process.env.MONGODB_USERNAME;
const mongo_password = process.env.MONGODB_PASSWORD;

const url =
    "mongodb+srv://" +
    mongo_username +
    ":" +
    mongo_password +
    "@" +
    mongo_url +
    "/passporttest?retryWrites=true&w=majority&appName=MyCluster0";

mongoose.connect(url).then(
    () => console.log("Connected to MongoDB"),
    (err) => console.log("Failed to connect to MongoDB. Reason: " + err)
);

// SESSION MANAGEMENT
app.use(
    session({
        name: "passport-test",
        resave: false,
        secret: "DontTellAnyone",
        saveUninitialized: false,
        cookie: { maxAge: 1000 * 60 * 60 },
        store: mongoStore.create({
            mongoUrl: url,
            collectionName: "sessions",
        }),
    })
);

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    "local-login",
    new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
            passReqToCallback: true,
        },
        function (req, username, password, done) {
            userModel
                .findOne({ username: username })
                .then(function (user) {
                    if (!user) {
                        return done(null, false);
                    }
                    bcrypt.compare(
                        password,
                        user.password,
                        function (err, success) {
                            if (err) {
                                return done(err);
                            }
                            if (!success) {
                                return done(null, false);
                            }
                            return done(null, user);
                        }
                    );
                })
                .catch(function (err) {
                    return done(err);
                });
        }
    )
);

passport.serializeUser(function (user, done) {
    console.log("serializeUser")
    let temp = {
        user: user.username,
        _id: user._id
    }
    done(null, temp);
});

passport.deserializeUser(function (data, done) {
    console.log("deserializeUser")
    userModel.findOne({ _id: data._id }).then(function (user) {
        done(null, user);
    }).catch(function (err) {
        done(err);
    });
});

// MIDDLEWARE

isUserLogged = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        if (req.session) {
            req.logout(function (err) {
                req.session.destroy();
                return res.status(403).json({ message: "Unauthorized" });
            })
        } else {
            return res.status(403).json({ message: "Unauthorized" });
        }
    }
}

// LOGIN API

app.post("/register", function (req, res) {
    bcrypt.hash(req.body.password, 14, function (err, hash) {
        if (err) {
            return res.status(500).json({ message: "Internal server error" });
        }
        let user = new userModel({
            username: req.body.username,
            password: hash,
        })

        user.save().then(function () {
            return res.status(200).json({ message: "User registered" });
        }).catch(function (err) {
            if (err.code === 11000) {
                return res.status(409).json({ message: "Username already exists" });

            } else {
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    })
})

app.post("/login", passport.authenticate("local-login"), function (req, res) {
    return res.status(200).json({ message: "Login successful" });
});

app.post("/logout", function (req, res) {
    if (req.session) {
        req.session.destroy();
        req.logout(function (err) {
            return res.status(200).json({ message: "Logout successful" });
        })
    } else {
        return res.status(404).json({ message: "Session not found" });
    }
})

app.use("/api", isUserLogged, apiroute);

app.listen(3000);
console.log("Server started on port 3000");
