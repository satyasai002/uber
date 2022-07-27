import './App.css';
import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/navBar.js';
import Body from './components/body.js';
import Footer from './components/footer';
import Login from './components/login';
import Signin from './components/signin';
import Newride from './components/newride.js';
import Driverlogin from './components/driverlogin';
import Distance from './components/distance';
import Mainpage from './routes/mainpage';
import Newridepage from './routes/newridepage';
import Myridespage from './routes/myridespage';


export const store = createContext();

function App() {
  const [token, setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/newride" element={<Newridepage />} />
            <Route path="/myrides" element={<Myridespage />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
