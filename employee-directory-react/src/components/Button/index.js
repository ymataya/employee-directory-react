import React from "react";
import "./style.css";

function Button(props) {
    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="inputGroupSelect01">Department</label>
                    </div>
                    <select value={props.activeDepartment} className="custom-select" id="inputGroupSelect01" onChange={(e) => props.handleChange(e)}>
                        <option>Select...</option>
                        {props.department.map(dept => (
                            <option key={props.id} value={dept}>{dept}</option>
                        ))}
                        
                    </select>
                    <div className="input-group-append">
                         <button type="button" className="btn btn-dark" onClick={props.search}>Search by Department</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Button;

