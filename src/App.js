import React, { useEffect, useState } from "react";

// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";

// Styled Components
import { AppBody } from "./App.styles";

// Firebase Stuff
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (userx) => {
        setUser(userx);
        console.log(userx);
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  return (
    <div>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header user={user} />
            <AppBody>
              <Sidebar user={user} />
              <Switch>
                <Route exact path="/">
                  <Chat user={user} />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
