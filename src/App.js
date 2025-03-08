import { Navbar } from "./components/Navbar";
import { Textarea } from "./components/Textarea";
import "./App.css";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";

      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar
            title="Textify"
            redirect="Home"
            about="About"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />

          <Routes>
            <Route
              exact
              path="/"
              element={<Textarea mode={mode} showAlert={showAlert} />}
            />

            <Route path="/About" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
