import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";

import About from "./components/About";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState("light");

  const [btText, setBtText] = useState("Enable");

  const [col, setCol] = useState("white");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-secondary");
  };

  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls);
    if (mode === "dark") {
      setMode("light");
      setCol("white");
      setBtText("Enable");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtils-Light Mode";
      showAlert("Light mode has been enabled ", "success");
    }
    if (mode === "light") {
      setMode("dark");
      setCol('dark');
      setBtText("Disable");
      document.body.style.backgroundColor = "#183D3D";
      document.body.style.color = "white";
      document.title = "TextUtils-Dark Mode";
      showAlert("Dark mode has been enabled ", "success");
    }
  };

  const change = () => {
    setCol("white");
    if (document.body.style.backgroundColor !== "blue") {
      setCol("blue");
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
    } else {
      if (mode === "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      } else {
        document.body.style.backgroundColor = "#183D3D";
        document.body.style.color = "white";
      }
    }
  };

  const change2 = () => {
    setCol("white");
    if (document.body.style.backgroundColor !== "grey") {
      setCol("grey");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
    } else {
      if (mode === "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      } else {
        document.body.style.backgroundColor = "#183D3D";
        document.body.style.color = "white";
      }
    }
  };

  const change3 = () => {
    setCol("white");
    if (document.body.style.backgroundColor !== "red") {
      setCol("red");
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
    } else {
      if (mode === "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      } else {
        document.body.style.backgroundColor = "#183D3D";
        document.body.style.color = "white";
      }
    }
  };

  const change4 = () => {
    setCol("white");
    if (document.body.style.backgroundColor !== "yellow") {
      setCol("yellow");
      document.body.style.backgroundColor = "yellow";
      document.body.style.color = "black";
    } else {
      if (mode === "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      } else {
        document.body.style.backgroundColor = "#183D3D";
        document.body.style.color = "white";
      }
    }
  };

  return (
    <>
      <Router>
        <Navbar
        name="TEXTVERT"
          title="Text-Utils"
          category="Home"
          mode={mode}
          toggleMode={toggleMode}
          change={change}
          change2={change2}
          change3={change3}
          change4={change4}
          btText={btText}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Textform showAlert={showAlert} mode={mode} col={col} />} />
            <Route path="/about" element={<About mode={mode} col={col}/>} />
            
          </Routes>

          {/* <Textform showAlert={showAlert} mode={mode} col={col} /> */}
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
