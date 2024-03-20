import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
    const [state, setState] = useState({
        list: [],
        id: 100,
    });

    const addContact = (contact) => {
        setState((state) => {
            contact.id = state.id;

            return {
                list: state.list.concat(contact),
                id: state.id + 1,
            };
        });
    };

    const removeContact = (id) => {
        setState((state) => {
            const tempList = state.list.filter((contact) => contact.id !== id);

            return {
                ...state,
                list: tempList,
            };
        });
    };

    return (
        <>
            <ContactForm addContact={addContact} />
            <hr />
            <ContactList
                list={state.list}
                removeContact={removeContact}
            />
        </>
    );
}

export default App;
