import React from "react";

const UserFollowers = props => {
    console.log("Followers map props--->",props.person)
    return (
        <div className="Followers">
            {props.followers.map((friend, index) =>(
                <div key={index}>
                    <h4>{friend.login}</h4>
                    <img src={friend.avatar_url} alt="Follower"/>
                </div>
            ))}
        </div>
    )
}

export default UserFollowers