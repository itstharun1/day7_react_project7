import React from 'react'

import { Component } from 'react'

import Clock from './components/Clock'

import './App.css'
class App extends Component{

  state={showClock:false}

  btnClick=()=>{
    this.setState({showClock:!this.state.showClock})
  }

  render(){
    const {showClock}=this.state
    return(
      <div className='box1'>
        <button onClick={this.btnClick}>{showClock? 'Hide Clock':'Show Clock'}</button>
        {showClock && <Clock/>}
      </div>
    )
  }
}

export default App