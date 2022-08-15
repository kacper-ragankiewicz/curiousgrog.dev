import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/app.sass"
import Routes from "./const/Routes";

// components
import Page from "./components/Page";

// screens
import Home from "./screens/Home";
import Jumy from "./screens/Jumy";


function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={Routes.MAIN}
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path={Routes.JUMYJUMY}
          render={() => (
            <Page>
              <Jumy />
            </Page>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
