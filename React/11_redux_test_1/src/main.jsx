import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import countReducer from "./reducers/countReducer.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(countReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
