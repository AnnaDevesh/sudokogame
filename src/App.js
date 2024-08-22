import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './compnents/Home';
import Game from './compnents/Game';
import BottomBanner from './compnents/BottomBanner';
import Landing from './compnents/Landing';
import User from './compnents/UserProfile';
import Controller from './compnents/Controller';
import Auth from './compnents/Auth/Auth'
const App = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize',  () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`); 
  })
  
  return (
    <>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Controller />
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/home" element={<Home />}></Route>
            
            <Route path="/auth" element={<Auth />}></Route>
            <Route path="/game" element={<Game />}></Route>
            <Route path="/myprofile" element={<User />} />
            {/* <Route path="/user/:username" element={<User />}></Route> */}
          </Routes>

          <BottomBanner />

        </BrowserRouter>

    </>
  );
}

export default App;