import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./Header";
import styled from 'styled-components';

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

  const Title = styled.h1`
    color: white;
    padding: 2%;
    background-color: blue;
    justify-content: center;
    align-items: center;
    /* width: 50%; */
    display: flex;
    border-radius: 50px;
    text-decoration:underline;
  `;

  const Image = styled.img`
    box-shadow: 20px 20px #FFF;
  `;

  const Content = styled.h4`
    width: 70%;
    padding: 2%;
    margin: 2% auto;
  `;

  const Body = styled.div`
    background-color: black;
    color:white;
  `;

  return (
    <div className="App">
      {
        <Header date={data.date}/>
      }
      {
      data &&
        <Body>
          <Title>{data.title}</Title>
          <Image src={data.url} alt="APOD Pic"></Image>
          <Content>{data.explanation}</Content>
        </Body>
      }
    </div>
  );
}

export default App;
