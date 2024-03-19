import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";

import "react-toastify/dist/ReactToastify.css";
import Success from "./components/Success";
import Failure from "./components/Failure";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Route path="/payment-success" exact component={Success} />
            <Route path="/payment-failed" exact component={Failure} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
