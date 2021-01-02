import React, {useEffect} from "react";
import MapScreen from "./MapScreen";

export default function AdminScreen(props){   
   return (
      <div>
            <MapScreen 
               userFirebase={props.userFirebase} 
               userData={props.userData}
               handleSignOut={props.handleSignOut}
            />
      </div>
   );
}


