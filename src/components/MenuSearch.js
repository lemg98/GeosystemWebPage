import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputBase from '@material-ui/core/InputBase';

export default function MenuSearch(props) {

    const [index,setIndex] = useState({});

    useEffect(function(){
        var index={};
        var { routes } = props;
        for(var i=0; i < routes.length; i++){
            index[routes[i]['Nombre']] = i;
        }        
        setIndex(index);
    },[props.routes]);


    return (
        <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={props.routes.map((option) => option['Nombre'])}
            renderInput={function(params){
                return(
                    <div ref={params.InputProps.ref}>
                        <InputBase 
                        placeholder="Search…"
                        classes={props.classes}
                        inputProps={props.inputProps} 
                        {...params.inputProps} />
                    </div>
                );
            }}
            onChange={function(event, value, reason){
                if(reason == "select-option"){
                    props.handleRouteSelected(index[value]);
                }
            }}
            />
    );
}