import { Component } from "react";

import './index.css'
class Clock extends Component{

    constructor(props){
        super(props)
        this.state={date: new Date()}
    }
    componentDidMount(){
        this.timerId=setInterval(this.tick,100)
    }
    tick = () => {
        this.setState({date:new Date()})
    }

    render(){

        const {date}=this.state
        console.log(date)

        return(
            <div className="box2">
                <h1>Clock</h1>
                <p>{date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock