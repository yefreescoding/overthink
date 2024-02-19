// React imports
import { useState, useEffect } from "react";

// component imports
import Menu from "./components/Menu";
import Form from "./components/Form";
import Thoughts from "./components/Thoughts";

//import libraries
import { CloudIcon } from "@heroicons/react/24/solid";

// context imports
import { AppProvider } from "./context/AppContext";

function App() {
  const [formIsOpen, setFormIsOPen] = useState(false);

  const handleForm = () => {
    setFormIsOPen(!formIsOpen);
  };

  // Event listener callback function
  const handleKeyDown = (event) => {
    // Check if the meta key (Command key on Mac, Windows key on Windows) and the letter 'k' are pressed
    if (event.metaKey && event.key === "k") {
      setFormIsOPen(true);
    }

    if (event.key === "Escape") {
      setFormIsOPen(false);
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AppProvider>
      <div className="wrapper">
        <main className="main" aria-label="Main content of the app">
          <header className="main__header">
            <div className="nada" aria-label="Logo of the site">
              <CloudIcon className="icons medium" />
            </div>
            <nav className="main__nav">
              <Menu openForm={handleForm} />
            </nav>
          </header>
          <section className="main__body">
            <h1 className="main__h1">OVERTHINK</h1>
            {formIsOpen && <Form onClick={handleForm} />}
            <Thoughts />
          </section>
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
