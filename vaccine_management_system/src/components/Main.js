import React from 'react';
import Header from './header/Header';
import { Route, Routes, } from 'react-router-dom';
import Admin from '../components/Admin/Admin';
import Home from './Home/Home';
import LoginReg from './User/LoginReg';



const Main = props => {
    return (

        <div>
            <Header/>
             <div className="container">
                <Routes>
                        <Route path="/admin" element={<Admin/>} />
                        <Route path="/user" element={<LoginReg/>} />
                        <Route path="/" element={<Home/>} />
                </Routes>
            </div> 
        </div>   
    )
}


export default Main; 