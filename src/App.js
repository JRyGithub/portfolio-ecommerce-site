import "./App.css";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import Header from "./components/header/header.component";
import MyRouter from "./route/MyRouter.route";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  var unsubscribeFromAuthRef = useRef(null);

  useEffect(() => {
    var unsubscribeFromAuth = unsubscribeFromAuthRef.current;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot((snapshot) => {
          setCurrentUser((prevState) => ({
            ...prevState,
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          }));
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuthRef.current = null;
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <MyRouter />
    </div>
  );
}

export default App;
