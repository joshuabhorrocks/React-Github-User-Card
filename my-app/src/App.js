import React from 'react';
import axios from "axios";
import './App.css';

//const userNames = ["joshuabhorrocks","mrsimpson3000","easpaas","Riley-Robinson","devjaymoe","Diddleslip","alanblee","CarlosAA10","gabeaster","janecyyu","jaybrennan" ]

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        people: {}
      };
    }
  
    componentDidMount() {
      axios.get(`https://api.github.com/users/devjaymoe`).then(response => {
        console.log(response.data)
        this.setState({
          person1: response.data,
        });
      });
    // axios.get(`https://api.github.com/users/devjaymoe`).then(response => {
    //     console.log(response.data)
    //     this.setState({
    //       person2: response.data,
    //     });
    //   });
    // axios.get(`https://api.github.com/users/gabeaster`).then(response => {
    //     console.log(response.data)
    //     this.setState({
    //       person3: response.data,
    //     });
    //   });
    // axios.get(`https://api.github.com/users/jaybrennan`).then(response => {
    //     console.log(response.data)
    //     this.setState({
    //       person4: response.data,
    //     });
    //   });
}

render() {
    return (
        <div className="App">
            <div className="Title">
                <h1>Github People</h1>
                <p>A few users of Github</p>
            </div>
                <div className="Card">
                    <h2>Joshua Horrocks</h2>
                    <p>Username: joshuabhorrocks</p>
                    <p>Bio: Web Developer at Lambda School</p>
                </div>
                <div className="Card">
                    <h2>Devin Moore</h2>
                    <p>Username: devjaymoe</p>
                    <p>Bio: null </p>
                </div>
        </div>
    )
    }
}


export default App;
