import React from 'react';
import axios from "axios";
import './App.css';

import UserCard from "./UserCard";
import UserFollowers from "./UserFollowers";

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        person: {}, followers: []
      };
    }
  
    componentDidMount() {
      axios.get(`https://api.github.com/users/joshuabhorrocks`).then(response => {
        console.log(response.data)
        this.setState({
          person: response.data,
        });
      })
      .catch(error => {
          console.log("Error:", error)
      })
      axios.get("https://api.github.com/users/joshuabhorrocks/followers").then(response => {
          console.log(response.data)
          this.setState({
            followers: response.data
          })
      })
      .catch(error => {
          console.log("Follower Error:", error)
      })
    }


render() {
    return (
        <div className="App">
            <h1>Github People</h1>
            <UserCard person={this.state.person}/>
            <UserFollowers followers={this.state.followers}/>
        </div>
    )
    }
}

export default App;
