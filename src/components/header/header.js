import React from "react";
import "./header.css";

export default ({onClick, type, teamName, onChangeListener}) => {
    return (
        <div className="headerContainer">
            <div className="create-team-block">
                <div className="input-field">
                    <label htmlFor="type">
                     Select Type
                    </label>
                    <select name="type"
                            onChange={onChangeListener}
                            id="type"
                            value={type}>
                        <option value="">Choose any</option>
                        <option value="Teams">Teams</option>
                    </select>
                </div>
                <div className="input-field">
                    <label htmlFor="teamName">
                        Team Name
                    </label>
                    <input type="text"
                           name="teamName"
                           value={teamName}
                           onChange={onChangeListener}/>
                </div>
                <div className="button-container">
                    <button onClick={onClick} disabled={!type || !teamName}>CREATE</button>
                </div>
            </div>
        </div>
    );
}