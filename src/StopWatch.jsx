import React, { Component } from 'react';

class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            buttonState: 'START',
            intervalId: null
        }
    }

    leading0(entity) {
        return (entity < 10) ? '0' + entity : entity;
    }

    startTimer() {
        let newVal = this.state.buttonState;
        if (newVal === 'START') {
            this.state.intervalId = setInterval(() => this.updateTimer(), 1000);
            this.setState({buttonState: 'STOP'});
        }
        else {
            clearInterval(this.state.intervalId);
            this.setState({buttonState: 'START'});
        }
    }

    updateTimer(){
        let newSeconds = this.state.seconds + 1;
        let newMinutes = this.state.minutes;
        let newHours = this.state.hours;
        if (newSeconds % 60 === 0) {
            newMinutes++;
            newSeconds = 0;
        }
        if (newMinutes % 60 === 0 && newMinutes !== 0) {
            newHours++;
            newMinutes = 0;
        }
        this.setState({
            seconds: newSeconds,
            minutes: newMinutes,
            hours: newHours
        })
    }

    render(){
        return(
            <div className="stopwatch">
                <h2>Stop watch</h2>
                <div className="stopwatch-clock">{this.leading0(this.state.hours)} Hours : {this.leading0(this.state.minutes)} Minutes : {this.leading0(this.state.seconds)} Seconds</div>
                <button onClick={() => this.startTimer()} className={(this.state.buttonState === 'START') ? 'stopwatch-start' : 'stopwatch-stop'}>{this.state.buttonState}</button>
            </div>
        );
    }
}

export default StopWatch;