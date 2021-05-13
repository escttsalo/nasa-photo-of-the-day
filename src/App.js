import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./Header";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setData(res.data);
    })
    .catch(err => alert(err))
  },[]);
  
  return (
    <div className="App">
      {
        <Header date={data.date}/>
      }
      {
      data &&
        <>
          <h1>{data.title}</h1>
          <img src={data.url} alt="APOD Pic"></img>
          <h4>{data.explanation}</h4>
        </>
      }
    </div>
  );
}

export default App;
