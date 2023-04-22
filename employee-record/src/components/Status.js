import React from "react";
import '../assests/Css/Status.css';
function Status({status}){
    let statusValue;
  if (status === "active") {
    statusValue = "Active";
  } else if (status === "in_active") {
    statusValue = "Inactive";
  } else if (status === "blocked") {
    statusValue = "Blocked";
  } else {
    statusValue = "Unknown";
  }
    return(
        <div className="statusBox">
            <p className={status?status:"unknown"}>{statusValue}</p>
        </div>
    );
}
export default Status;