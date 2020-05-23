import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li id="employee">
            {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
