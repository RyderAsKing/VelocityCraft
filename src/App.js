import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "./components/CustomSwitch";
import Home from "./pages/Home";
import Vote from "./pages/Vote";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/vote" component={Vote} exact></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
