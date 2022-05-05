import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./Components/Home";
import Wishlist from "./Components/Wishlist";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/wishlistMovies">
            <Wishlist />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
