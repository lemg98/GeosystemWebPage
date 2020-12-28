import React,{ useState } from 'react';
import SignIn from '../components/SignIn';
import { Redirect } from 'react-router-dom';
import AdminScreen from './AdminScreen';

export default function LoginScreen() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function handleIsAuthenticated(){
        setIsAuthenticated(true);
    }

    return (
        <div>
         { !isAuthenticated ? <SignIn handleIsAuthenticated={handleIsAuthenticated}/> : <AdminScreen/> } 
        </div>
     );
}