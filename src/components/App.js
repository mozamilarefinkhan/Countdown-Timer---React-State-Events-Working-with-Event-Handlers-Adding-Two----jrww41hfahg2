import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const [time, setTime] = useState("")
  const addTime = (e)=>{
    const input = parseInt(e.target.value)
    setTime(input)
     if(input<=0){
      setTime(0)
    }
  }
  
  useEffect(()=>{
      const interval = setInterval(()=>{
      setTime(time-1)
      if(time<=0){
        setTime(0)
      }
    }, 1000)
    return()=>clearInterval(interval)
  })
  // write your code here 

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={addTime} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  )
}


export default App;
