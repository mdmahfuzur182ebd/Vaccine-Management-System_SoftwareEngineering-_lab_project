import React from 'react';
import Header from './header/Header';
import { Route, Routes, } from 'react-router-dom';
import Admin from '../components/Admin/Admin';
import Home from './Home/Home';
import LoginReg from './User/Auth/LoginReg';
import VaccineRegistion from './User/VaccineRegistion';



const Main = props => {
    return (

        <div>
            <Header/>
             <div className="container">
                <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/admin" element={<Admin/>} />
                        <Route path="/user" element={<LoginReg/>} />
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/vaccineRegistion" element={<VaccineRegistion/>} />
                </Routes>
            </div> 
        </div>   
    )
}


export default Main;  