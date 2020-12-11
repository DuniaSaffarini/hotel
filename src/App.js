import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage/FirstPage";
import Home from "./components/Home/Home";
import Facilities from "./components/Facilities/Facilities.js";
import Rooms from "./components/Rooms/Rooms.js";
import Contact from "./components/Contact us/Contact.js";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.js";

function App() {
  const pathname = window.location.pathname;
  var Image = "";

  if (pathname === "/Home") {
    Image = "app-cont";
  } else if (pathname === "/Facilities") {
    Image = "app-cont2";
  } else if (pathname === "/Rooms") {
    Image = "app-cont3";
  } else {
    Image = "app-cont4";
  }
  return (
    <div className="App">
      <div className={Image}>
        <div className="App-header">
          <header>
            <Header />
          </header>
        </div>
        <div>
          {pathname === "/Contact" ? " " : <FirstPage />}
          <BrowserRouter>
            <Switch>
              <Route exact path="/Home">
                {" "}
                <Home />
              </Route>
              <Route exact path="/Facilities">
                {" "}
                <Facilities />
              </Route>
              <Route exact path="/Rooms">
                {" "}
                <Rooms />
              </Route>
              <Route exact path="/Contact">
                {" "}
                <Contact />
              </Route>
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
