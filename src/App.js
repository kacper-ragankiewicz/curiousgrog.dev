import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/app.sass"
import Routes from "./const/Routes";

// components
import Page from "./components/Page";

// screens
import Home from "./screens/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={Routes.MAIN}
          render={() => (
            <Page title="Strona główna">
              <Home />
            </Page>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
