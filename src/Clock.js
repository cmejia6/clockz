import React, { Component } from 'react';
import Display from './Display';
import Panel from './Panel';

class Clock extends Component{
    constructor(){
        super();

        this.state = {
            date : new Date(),
            dateOn : true
        }

        this.toggleDate = this.toggleDate.bind(this)
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({date : new Date()});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    toggleDate(){
        this.setState({dateOn : !this.state.dateOn})
        console.log(this.state.dateOn)
    }

    render(){
        return(
            <div >
                <div >
                    <Panel toggleDate={this.toggleDate}/>
                </div>
                <div >
                    <Display date={this.date} dateOn={this.state.dateOn}/>
                </div>
            </div>
        )
    }
}

export default Clock;