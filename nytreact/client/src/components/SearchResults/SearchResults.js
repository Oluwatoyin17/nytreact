import React from "react";
const Results = props =>
    <div className = "container">
        <li className = "list-group-item">
        <h4>
            <span>
                <em>{props.title}</em>
            </span>
            <span className = "btn-group">
                <a href={props.url} target="_blank">
                </a>
                <button className = "btn btn-primary" onClick={() => props.handleSave(props._id)}>Save</button>
            </span>
        </h4>
        <p> Date Published: {props.date}</p>
        </li>
    </div>

    export default SearchResults;
