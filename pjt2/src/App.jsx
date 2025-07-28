import { useState } from 'react'
import './App.css'
import Profile from '../components/profile';
import Desig from '../components/desig';
import About from '../components/about';
function App() {

  return (
    <>
      <h1 style={{textAlign:"center"}}>Profile card</h1>
      <div className="card">
        <Profile />
        <h2>Bazil</h2>
        <Desig />
        <About/>
      </div>
    </>
  )
};


export default App;