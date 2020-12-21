import "./App.css";
import { Switch, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage/FirstPage";
import Home from "./components/Home/Home";
import Facilities from "./components/Facilities/Facilities.js";
import Rooms from "./components/Rooms/Rooms.js";
import Contact from "./components/Contact us/Contact.js";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.js";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const [im, setImage] = useState("/Home");
  const [styleBackGround, setStyleBackGround] = useState("app-cont");
  const history = useHistory();
  useEffect(() => {
    history.listen((location) => {
      console.log(`You changed the page to: ${location.pathname}`);
      setImage(location.pathname);
      if (location.pathname === "/Home") {
        console.log(`You changed the page to:home`);
        setStyleBackGround("app-cont");
      } else if (location.pathname === "/Facilities") {
        console.log(`You changed the page to:face`);
        setStyleBackGround("app-cont2");
      } else if (location.pathname === "/Rooms") {
        console.log(`You changed the page to:room`);
        setStyleBackGround("app-cont3");
      } else {
        console.log(`You changed the page to:else`);
        // eslint-disable-next-line no-unused-vars
        setStyleBackGround("app-cont4");
      }
    });
    return () => {
      console.log("cleaned up");
    };
  }, [history, im, styleBackGround]);

  return (
    <div className="App">
      <div className={styleBackGround}>
        <div>
          <div className="App-header">
            <header>
              <Header />
            </header>
          </div>
          <div>
            {im === "/Contact" ? " " : <FirstPage />}

            <Switch>
              <Route exact path="/Home">
                <Home />
              </Route>
              <Route exact path="/Facilities">
                <Facilities />
              </Route>
              <Route exact path="/Rooms">
                <Rooms />
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
