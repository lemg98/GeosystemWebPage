import React,{ useState } from 'react';
import SignIn from '../components/SignIn';
import AdminScreen from './AdminScreen';
import { userSignIn } from '../utils/FirebaseAPI';


export default function LoginScreen() {

   const [user,setUser] = useState(null);
   const [invalidEmail,setInvalidEmail] = useState(false);
   const [invalidPassword,setInvalidPassword] = useState(false);

   function handleLogIn(user){
      userSignIn(user,setUser,setInvalidEmail,setInvalidPassword,setIsAuthenticated);
   }

   const [isAuthenticated, setIsAuthenticated] = useState(false);


   return (
      <div>
         { !isAuthenticated ? 
            <SignIn 
            handleLogIn={handleLogIn}
            invalidEmail={invalidEmail}
            invalidPassword={invalidPassword}
            /> : <AdminScreen user={user}/> } 
      </div>
   );
}