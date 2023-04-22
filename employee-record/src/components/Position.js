import React from "react";
import "../assests/Css/Position.css";
function Position({position}){
    return(
        <div className="positionDiv">
            <h1 className="positionValue">{position?position:"Floating"}</h1>
        </div>
    );
}
export default Position;