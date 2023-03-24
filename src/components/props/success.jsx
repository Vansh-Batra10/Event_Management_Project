import React from "react";

function Success(props) {
    return (
        <div className="success">
            <div className="successimg">
            <h1>Hello</h1>
            </div>
            <p>{props.content}</p>
        </div>
      
    );
}
export default Success;