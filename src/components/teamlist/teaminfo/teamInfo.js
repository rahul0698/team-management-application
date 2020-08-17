import React from "react";
import "./teaminfo.css";

export default ({currentTeam,
                    newUserName,
                    newUserDescription,
                    deleteUser,
                    userDetailFill,
                    onCreateUser}) => {
    return (
        <div>
            <div className="title">{currentTeam.teamName}</div>
            <hr/>

            <div className="user-container">
                <div className="create-userCard">
                    <div className="create-userInput">
                        <label htmlFor="username">Name</label>
                        <input type="text"
                               value={newUserName}
                               onChange={userDetailFill}
                               name="username"/>
                    </div>
                    <div className="create-userInput">
                        <label htmlFor="description">
                            Description
                        </label>
                        <textarea type="text"
                                  value={newUserDescription}
                                  onChange={userDetailFill}
                                  name="description"/>
                    </div>
                    <button className="create-user-button"
                            disabled={!newUserName || !newUserDescription}
                            onClick={onCreateUser}>
                        Create User +
                    </button>
                </div>

                {currentTeam?.users.map(user => <div className="create-userCard"
                                                     key={user.id}>
                        <div>
                            <label>Name</label>
                            <div className="display-info">{user.name}</div>
                        </div>
                        <div>
                            <label>Description</label>
                            <div style={{height: '150px'}}
                                 className="display-info">
                                {user.description}
                            </div>
                        </div>
                        <button className="delete-user" onClick={deleteUser}>Delete User -</button>
                    </div>
                )}
            </div>
        </div>
    );
}