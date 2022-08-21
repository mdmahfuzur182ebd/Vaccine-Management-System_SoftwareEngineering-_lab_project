import React from 'react';
//import Header from './header/Header';
import { Route, Routes, } from 'react-router-dom';
import Admin from '../components/Admin/Admin';
import Home from './Home/Home';
import LoginReg from './User/Auth/LoginReg';
import VaccineRegistion from './User/VaccineRegistion';
import Layout from './User/Layout';



const Main = props => {
    return (

        <div>
             <div className="container">
                <Routes>
                     <Route path='/' element={<Layout />}>
                        <Route path="/" element={<Home/>} />
                        <Route path="/admin" element={<Admin/>} />
                        <Route path="/user" element={<LoginReg/>} />
                    </Route>   
                    <Route path="/vaccineRegistion" element={<VaccineRegistion/>} />
                </Routes>
                 
            </div> 
        </div>   
    )
}


export default Main;  
