import React, { Component } from 'react'
import Show from './components/Show'
import GoTop from './components/GoTop'
export default class App extends Component {
  render() {
    return (
      <div style={{width:'100%'}}>
        <Show/>
        <GoTop/>

      </div>
    )
  }
}
