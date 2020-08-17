import React from "react";
import "./teamlist.css"

export default ({teams, onTeamSelect}) => {
    return (
        <>
            {teams?.map((team, index) =>  (<div key={index} className="team-block" id={index} onClick={onTeamSelect}>
                    <div>{team.teamName}</div>
                </div>)
            )}
        </>
    );
}