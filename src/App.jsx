import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import StopWatch from './StopWatch';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: '24 DECEMBER, 2017',
            newDeadline: ''
        }
    }
    changeDeadline() {
        this.setState (
            {
                deadline: this.state.newDeadline
            }
        );
    }
    render() {
        return(
            <div className="App">
                <div>Countdown to { this.state.deadline }</div>
                <Clock deadline={this.state.deadline} />
                <div>
                    <input type="text" placeholder="New date" onChange={ event => this.setState({ newDeadline: event.target.value }) }/>
                    <button onClick={ () => this.changeDeadline() }>Submit</button>
                </div>
                <StopWatch/>
            </div>
        );
    }
}

export default App;