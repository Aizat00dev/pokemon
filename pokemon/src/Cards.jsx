import React from "react";


export default function Cards(props){
    return(
        <div className="cards">
           <p className="name">props.name</p>
           <img src="${props.img}" alt=""/>
        </div>
    )
}