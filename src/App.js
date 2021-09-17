import React from "react";

// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// Styled Components
import { AppBody } from "./App.styles";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <AppBody>
          <Sidebar />
          <Switch>
            <Route exact path="/">
              {/* Chat */}
            </Route>
          </Switch>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;
