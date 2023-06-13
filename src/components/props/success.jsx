import { text } from "body-parser";
import React from "react";

function Success({title,img,content,category}) {
    return (
        <div className="success">
        <h1 style={{textAlign:"center"}}>{title}</h1>
            <div className="successimg">
                <img src={img}></img>
            </div>
            <p>{content}</p>
        </div>
      
    );
}
export default Success;