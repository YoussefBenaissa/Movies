import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Favoris from "./components/Favoris";
import Error from "./components/ErrorPages";
import Details from "./components/Details";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favoris" exact component={Favoris} />
        <Route path="/details" exact component={Details} />
        <Route component={Error} />
      </Switch>
     
    </BrowserRouter>
  );
}

export default App;
