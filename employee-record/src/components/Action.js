import React from "react";
import '../assests/Css/Action.css';
function Action({action}){
    const actionClass = action;
    console.log(actionClass);
    let actionValue;
    if (action === "invited") {
      actionValue = "Remove";
    } else if (action === "not_invited") {
      actionValue = "Invite";
    }
    else {
      actionValue = "Unknown";
    }
    return(
        <button disabled={action?false:true} onClick={()=>{console.log("button clicked")}} className={actionClass?`${actionClass} btn`:"unknownAction btn"}>
            {actionValue}
        </button>
    );
}
export default Action;