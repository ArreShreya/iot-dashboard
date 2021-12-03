import React, {Fragment, useEffect, useState, useRef} from "react"
import './App.css';

function App() {


  const getData = async() => {
    try {

        const tsData = await fetch("https://api.thingspeak.com/channels/1587446/feeds.json?api_key=DVNDCBS2VZEDWU5L&results=2");
        const jsonData = await tsData.json()
        console.log(jsonData);

    } catch (err) {
        console.error(err)
    }
}

useEffect(() => {
  getData();
}, [])


  return (
    <div className="App">
      <h1>Dashboard:</h1>
    </div>
  );
}

export default App;
