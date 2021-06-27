import './App.css';
import React, { useState, useEffect, useLayoutEffect, useRef} from 'react';

import Header from './components/header/header.component';
import MyRouter from './route/MyRouter.route';
import { auth } from './firebase/firebase.utils';

function App() {
  const[currentUser, setCurrentUser] = useState(null);

  var unsubscribeFromAuthRef = useRef(null);

  useEffect(() => {
    var unsubscribeFromAuth = unsubscribeFromAuthRef.current;
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    })
    return () => {
      unsubscribeFromAuthRef.current = null;
    }
  }, []);

  return (
    <div>
      <Header currentUser={ currentUser } />
      <MyRouter />
    </div>
    
  );
}

export default App;
