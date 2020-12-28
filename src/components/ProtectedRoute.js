import React from "react";
import { Route, Redirect} from 'react-router-dom';

export default class ProtectedRoute extends React.Component{

    render(){
        return(
            <Route
                {...this.props}
                render={function(){
                        if(true){
                            return <div><h1> ok </h1></div>;
                        }
                        else{
                            return <h1>not ok</h1>
                        }
                    }
                } 
            />
        );
    }
}