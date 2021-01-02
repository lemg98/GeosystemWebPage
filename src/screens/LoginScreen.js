import React,{ useEffect, useState } from 'react';
import SignIn from '../components/SignIn';
import AdminScreen from './AdminScreen';
import { userSignIn,userSignOut, getUserState } from '../utils/FirebaseAPI';


export default function LoginScreen() {

   const [user,setUser] = useState(null);
   const [data,setData] = useState(null);
   const [invalidEmail,setInvalidEmail] = useState(false);
   const [invalidPassword,setInvalidPassword] = useState(false);

   async function handleLogIn(user){
      await userSignIn(user,setUser,setInvalidEmail,setInvalidPassword,setIsAuthenticated, setData);
   }

   async function handleSignOut(){
      await userSignOut(setUser,setIsAuthenticated);
   }

   const [isAuthenticated, setIsAuthenticated] = useState(null);

   const [onLoad,setOnLoad] = useState(true);

   useEffect(async function(){
      await getUserState(setData,setIsAuthenticated);
      setOnLoad(false);
   },[]);

   if(!onLoad && isAuthenticated !== null){
      return (
         <div>            
            {!isAuthenticated ? 
               <SignIn 
                  handleLogIn={handleLogIn}
                  invalidEmail={invalidEmail}
                  invalidPassword={invalidPassword}
               /> 
               : 
               <AdminScreen 
                  userFirebase={user} 
                  userData={data}
                  handleSignOut={handleSignOut}
               />  
            }
         </div>
      );
   }
   else return null;
}