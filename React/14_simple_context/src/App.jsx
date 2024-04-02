import { themes, ThemeContext } from "./context/ThemeContext";
import { useState } from "react";
import Headline from "./components/Headline";
import Paragraph from "./components/Paragraph";
import ToggleButton from "./components/ToggleButton";

function App() {
    const [state, setState] = useState({
        theme: themes.dark,
    });

    const toggleTheme = () => {
        if (state.theme === themes.dark) {
            setState({ theme: themes.light });
        } else {
            setState({ theme: themes.dark });
        }
    };

    return (
        <ThemeContext.Provider value={state.theme}>
            <div>
                <Headline>Lorem impsumia</Headline>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptate unde nulla alias maxime, delectus accusamus
                    cupiditate blanditiis nihil enim, eligendi necessitatibus
                    officia. Reprehenderit tenetur adipisci odit officia
                    voluptatum obcaecati? Ipsa.
                </Paragraph>
                <ToggleButton toggleTheme={toggleTheme} />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
