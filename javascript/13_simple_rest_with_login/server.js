const express = require("express");
const shoppingRoute = require("./routes/shoppingroute");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

let app = express();

app.use(express.json());

// Login databases

const registeredUsers = [];
const loggedSessions = [];
const time_to_live_diff = 3600000;

// Helper and middleware

createToken = () => {
    let token = crypto.randomBytes(64);
    return token.toString("hex");
}

isUserLogged = (req, res, next) => {
    if (!req.headers.token) {
        return res.status(403).json({ "Message": "Forbidden" });
    }

    for (let i = 0; i < loggedSessions.length; i++) {
        if (req.headers.token === loggedSessions[i].token) {
            let now = Date.now();
            if (now > loggedSessions[i].ttl) {
                loggedSessions.splice(i, 1);
                return res.status(403).json({ "Message": "Forbidden" })
            } else {
                loggedSessions[i].ttl = now + time_to_live_diff;
                req.session = {};
                req.session.user = loggedSessions[i].user;
                return next();
            }
        }
    }

    return res.status(403).json({ "Message": "Forbidden" });
}

// Login api

app.post("/register", function (req, res) {
    if (!req.body) {
        return res.status(400).json({ "Message": "Bad request" });
    }

    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ "Message": "Bad request" });
    }

    if (req.body.username.length < 4 || req.body.password.length < 8) {
        return res.status(400).json({ "Message": "Bad request" });
    }

    for (let i = 0; i < registeredUsers.length; i++) {
        if (req.body.username === registeredUsers[i].username) {
            return res.status(409).json({ "Message": "Username already in use" });
        }
    }

    bcrypt.hash(req.body.password, 14, function (err, hash) {
        if (err) {
            console.log(err);
            return res.status(500).json({ "Message": "Internal Server Error" });
        }

        let user = {
            username: req.body.username,
            password: hash
        }

        console.log(user);
        registeredUsers.push(user);
        return res.status(201).json({ "Message": "Register Success" });
    })
})

app.post("/login", function (req, res) {
    if (!req.body) {
        return res.status(400).json({ "Message": "Bad request" });
    }

    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ "Message": "Bad request" });
    }

    if (req.body.username.length < 4 || req.body.password.length < 8) {
        return res.status(400).json({ "Message": "Bad request" });
    }

    for (let i = 0; i < registeredUsers.length; i++) {
        if (req.body.username === registeredUsers[i].username) {
            bcrypt.compare(req.body.password, registeredUsers[i].password, function (err, success) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ "Message": "Internal Server Error" })
                }

                if (!success) {
                    return res.status(401).json({ "Message": "Unauthorized" })
                }

                let token = createToken();
                let now = Date.now();
                let session = {
                    user: req.body.username,
                    token: token,
                    ttl: now + time_to_live_diff
                }

                loggedSessions.push(session);
                return res.status(200).json({ "token": token })
            })
            return;
        }
    }

    return res.status(401).json({ "Message": "Unauthorized" });
})

app.use("/api", isUserLogged, shoppingRoute)

app.listen(3000);

console.log("Running in port 3000");