import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
