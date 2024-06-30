import React from "react";


export default function Cards(props){
    return(
        <div>
           <div className="card">
            <img className="img" src={props.url}/>
            <div className="name">{props.name}</div>
            
           </div>
        </div>
    )
}