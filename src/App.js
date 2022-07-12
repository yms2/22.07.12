
import React from 'react';
import './App.css';
import Header from './component/header';
import Body from './component/body';
import Header2 from './component/header2';


function App() {
  const box = {
    width: '100%',
    height : '300px',
    backgroundColor:'skyblue'
  }
  const ttl ='리액트 시작10000'
  return (
    <div className="wrapper">
      <h1 style={{color:'red'}}>{ttl}</h1>
      <div style={box}>{ttl}</div>
      <Header text = {ttl} color="red" />
      <Header2 text = {ttl} color="red" />
      <Body/>
    </div>
  );
}

export default App;
