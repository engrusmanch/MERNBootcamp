
import React from 'react';
import {auth} from './firebase_service';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './Login';
import MainPage from './MainPage';


function App() {
const [user] = useAuthState(auth);
return (
	user ? <MainPage/> : <Login/>
);
}

export default App;
