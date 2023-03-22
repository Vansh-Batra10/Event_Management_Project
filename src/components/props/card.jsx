import React from "react";

function Card(props) {
    return (
        <div className="card">
            <h1 className="cardtitle" >{props.name}</h1>
            <div className="cardimage"> </div>
            <div className="carddesc">{props.content}</div>
        </div>
      
    );
}
export default Card;