import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
      persons: [
          { name: 'Juan', age: 30 },
          { name: 'Yess', age: 26 },
          { name: 'Manu', age: 29 }
      ]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 30 },
                { name: 'Yess', age: 26 },
                { name: 'Manu', age: 150 }
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I am react APP</h1>
                <button onClick={this.switchNameHandler.bind(this, 'Juanete!!!') }>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies is: racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
