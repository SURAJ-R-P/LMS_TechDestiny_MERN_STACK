import React, { createContext, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Lms from './components/Lms';
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Error from './components/Error';
import Management from './components/Management';
import Logout from './components/Logout';
import { initialState, reducer } from './reducer/useReducer';

export const UserContext = createContext()

const Routing = () => {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/lms' element={<Lms />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/management' element={<Management />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<SignUp />} />
        <Route exact path='/logout' element={<Logout />} />
        <Route exact path='/:page' element={<Error />} />
        <Route exact path='/:page/:id' element={<Error />} />
      </Routes>
    </>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
      <UserContext.Provider value={{state, dispatch}}>
        
        <Navbar />
        <Routing />

      </UserContext.Provider>
  )
}

export default App;