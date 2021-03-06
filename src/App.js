import React, { useState } from "react";
import "./App.css";

import Status from "./components/status/Status";
import LoginAndSignUp from "./components/loginAndSignUp/LoginAndSignUp";
import ChooseSubscription from "./components/chooseSubscription/ChooseSubscription";

function App() {
  // Logged in state
  const [loggedIn, setLoggedIn] = useState(false);

  const logOut = () => {
    setLoggedIn(false);
  };

  // Status viewer, Login and Sign up component, and logout button
  return (
    <div className="App">
      <div className="component-container">
        <Status loggedIn={loggedIn} />
      </div>
      {loggedIn ? (
        <div className="component-container">
          <button onClick={logOut}>Sign Out</button>
        </div>
      ) : (
        <>
          <div className="component-container">
            <LoginAndSignUp />
          </div>

          <div className="component-container">
            <ChooseSubscription />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
