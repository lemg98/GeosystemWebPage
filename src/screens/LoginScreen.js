import React,{ useState } from 'react';
import SignIn from '../components/SignIn';
import AdminScreen from './AdminScreen';
import { firebaseApp } from '../ConfigFirebase';

export default function LoginScreen() {

   const [user,setUser] = useState(null);
   const [invalidEmail,setInvalidEmail] = useState(false);
   const [invalidPassword,setInvalidPassword] = useState(false);

   function handleLogIn(user){

   firebaseApp.auth().signInWithEmailAndPassword(user.email, user.password)
   .then((user) => {
      setUser(user);    
      setIsAuthenticated(true);
      setInvalidEmail(false);
      setInvalidPassword(false);
   })
   .catch((error) => {
      setInvalidEmail(false);
      setInvalidPassword(false);
   if (error.code == 'auth/invalid-email' || error.code == 'auth/user-not-found')
      setInvalidEmail(true);
   else if (error.code == 'auth/wrong-password')
      setInvalidPassword(true);
   });  
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