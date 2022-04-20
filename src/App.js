import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#183968";
      showAlert("Dark Mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="AboutTextutils"
          mode={mode}
          togglemode={togglemode}
        />
        {/* <div style={height:5px}> */}

        <Alert alert={alert} />
        {/* </div> */}

        {/* <Navbar /> */}
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="TextUtils - Word Counter, Character Counter"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
