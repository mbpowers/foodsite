import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="checkout" element={<></>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
