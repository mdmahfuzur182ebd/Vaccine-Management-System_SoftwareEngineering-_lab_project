import React from 'react';
import Header from './header/Header';
import { Route, Routes, } from 'react-router-dom';
import Adminlogin from './Admin/Adminlogin';
import Dashboard from './Dashboard/Dashboard';
import Home from './Home/Home';
import Auth from './User/Auth/Auth';



const Main = props => {
    return (

        <div>
            <Header/>
             <div className="container">
                <Routes>
                        <Route path="/admin" element={<Adminlogin/>} />
                        <Route path="/dashboard" element={<Dashboard/>} />
                        <Route path="/user" element={<Auth/>} />
                        <Route path="/" element={<Home/>} />
                        
                </Routes>
            </div> 
        </div>   
    )
}


export default Main;