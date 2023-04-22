import React from "react";
import "../assests/Css/EmployeeName.css";
function EmployeeName({ fullName }) {
  return (
    <div>
      <div className="employeeName-firstLetter">
        <div className="firstLetter">
          <p>{fullName?.slice(0, 1)}</p>
        </div>
        <div className="employeeName">
          <p>{fullName ? fullName : "N/A"}</p>
        </div>
      </div>
    </div>
  );
}
export default EmployeeName;
