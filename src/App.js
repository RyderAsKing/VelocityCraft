import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "./components/CustomSwitch";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
