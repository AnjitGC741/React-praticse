import React from "react";
import '../assests/Css/TableField.css';
function TableField(){
    return(
        <div className="table-fields">
            <p>Name</p>
            <p className="position">Position</p>
            <p className="status">Status</p>
            <p className="progress">Progress</p>
            <p className="action">Action</p>
        </div>
    );
}
export default TableField;