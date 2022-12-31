import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import DogDetails from './components/dogdetails';
import Login from './components/login';
import Register from './components/register';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
function App() {
  // const[signIn, setSignIn] = useState(false)
  //   //  store isLoggedIn in localStorage so that user can not go details page without login
  //   useEffect(() => {
  //     if (localStorage.getItem("signI") === "true") {
  //       setSignIn(true)
  //     } else {
  //       setSignIn(false)
  //     }
  //   }, [])

  return (
    <div className='App'>
      {/* use router */}
      <BrowserRouter> 
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route exact path='/Register' element={<Register/>}></Route>
        <Route exact path='/DogDetails' element={<DogDetails/>}></Route>
        {/* <Route exact path='/DogDetails' element={"signI" ? <DogDetails/> : <Login/> }></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;