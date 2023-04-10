import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Manage from "./pages/Manage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Leaves from "./pages/Leaves";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Registration />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/manage">
            <Manage />
          </Route>
          <Route path="/leaves">
            <Leaves />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
