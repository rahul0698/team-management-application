import React, { useCallback, useReducer, useState } from 'react';
import './App.css';
import Header from "./components/header/header";
import TeamInfo from "./components/teamlist/teaminfo/teamInfo";
import TeamList from "./components/teamlist/teamlist";

const inititalState = {
    teams: [
        {type: "teams", teamName: 'fkdgjhfh', users:[]},
        {type: "teams", teamName: 'leovmmf', users:[]},
    ],
    currentTeam: null,
    currentTeamIndex: null
}

const ActionTypes = {
    "CREATE_TEAM": "CREATE_TEAM",
    "CURRENT_TEAM": "CURRENT_TEAM",
    "UPDATE_TEAM": "UPDATE_TEAM"
}

function reducer(state, action) {
    switch (action.type) {
        case ActionTypes.CREATE_TEAM:
            const {teams} = JSON.parse(JSON.stringify(state));
            teams.push(action.payload);
            return {...state, teams};
        case ActionTypes.CURRENT_TEAM:
            return {
                ...state,
                currentTeam: action.payload.currentTeam,
                currentTeamIndex: action.payload.currentTeamIndex
            };
        case ActionTypes.UPDATE_TEAM:
            return {
                ...state,
              teams: action.payload
            };
        default:
            return {...state}
    }
}

function App() {
    const [{teams, currentTeam, currentTeamIndex}, dispatch] = useReducer(reducer, inititalState);

    const [type, setType] = useState('');
    const [teamName, setTeamName] = useState('');
    const [newUsername, setUserName] = useState('');
    const [newUserDescription, setDescription] = useState('');


    const onChangeListener = useCallback((event) => {
        if (event.target.name === "type") {
            setType(event.target.value);
        }

        if (event.target.name === "teamName") {
            setTeamName(event.target.value);
        }
    }, []);

    const onSubmitListener = useCallback((event) => {
        event.stopPropagation();
        dispatch({type: ActionTypes.CREATE_TEAM, payload: {type, teamName, users: []}});
        setType('');
        setTeamName('');
    }, [type, teamName]);

    const selectTeamHandler = useCallback(({currentTarget}) => {
       const {id} = currentTarget;
       const currentTeam = teams[id];
       dispatch({type: ActionTypes.CURRENT_TEAM,
           payload: {currentTeam: currentTeam, currentTeamIndex: id}});
    }, [teams]);


    const userDetailFillListener = useCallback((event) => {
        if (event.target.name === "username") {
            setUserName(event.target.value);
        }

        if (event.target.name === "description") {
            setDescription(event.target.value);
        }
    }, []);

    const createUserHandler = useCallback((event) => {
        event.stopPropagation();
        const team = teams[currentTeamIndex];
        team.users = [
            ...team.users,
            {name: newUsername,
            description: newUserDescription,
            id: Math.random()*100}
            ];
        teams.splice(currentTeamIndex, 1, team);
        dispatch({type: "UPDATE_TEAM", payload: teams});
        setUserName('');
        setDescription('');
    }, [teams, currentTeamIndex, newUserDescription, newUsername]);

    const deleteUserHandler = useCallback(({currentTarget}) => {
        const {id} = currentTarget;
        const team = teams[currentTeamIndex];
        team.users.splice(id, 1);
        teams.splice(currentTeamIndex, 1, team);
        dispatch({type: "UPDATE_TEAM", payload: teams});
    }, [teams, currentTeamIndex]);

    return (
        <div className="App">
            <Header type={type}
                    onChangeListener={onChangeListener}
                    teamName={teamName}
                    onClick={onSubmitListener}/>
            <div className="content">
                <div className="sidebar">
                    <div className="sidebar-title">Teams</div>
                    {teams && <TeamList teams={teams} onTeamSelect={selectTeamHandler}/>}
                </div>
                <div className="description-container">
                    {currentTeam && <TeamInfo currentTeam={currentTeam}
                                              newUserDescription={newUserDescription}
                                              newUserName={newUsername}
                                              deleteUser={deleteUserHandler}
                                              onCreateUser={createUserHandler}
                                              userDetailFill={userDetailFillListener}/>}
                </div>
            </div>
        </div>
    );
}

export default App;
