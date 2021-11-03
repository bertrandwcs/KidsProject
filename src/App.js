import React, { useState, useEffect } from "react";
import firebase from "./utils/firebaseConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Main from "./Main";
import { UidContext } from "./UidContext";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../src/redux/reducers";
import { getKids } from "./redux/actions/kids.action";

function App() {
  const [isSignedIn, setSignedIn] = useState(false);
  const [uid, setUid] = useState(null);

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setSignedIn(!!user);
      setUid(user.uid);
    });
  }, []);

  store.dispatch(getKids(uid));
  return (
    <Provider store={store}>
      <UidContext.Provider value={uid}>
        <div className="app">
          {isSignedIn ? (
            <Main />
          ) : (
            <div className="login-page">
              <h1 className="title" style={{ "text-align": "center" }}>
                Kids app
              </h1>
              <h3 className="title" style={{ "text-align": "center" }}>
                Login
              </h3>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          )}
        </div>
      </UidContext.Provider>
    </Provider>
  );
}

export default App;
