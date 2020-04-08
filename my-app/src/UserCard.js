import React from "react";

const UserCard = props => {
    console.log("Card props --->",props.person)
    return (
        <div className="Card">
            <h2 className="name">{props.person.name}</h2>
            <img src={props.person.avatar_url} alt="Profile"></img>
            <p className="username">{props.person.login}</p>
            <p>Profile: <a href={props.person.html_url}>{props.person.html_url}</a></p>
            <p>Bio: {props.person.bio}</p>
        </div>
    )
}

export default UserCard