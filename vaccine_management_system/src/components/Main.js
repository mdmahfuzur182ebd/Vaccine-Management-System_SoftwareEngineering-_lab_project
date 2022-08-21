import React from 'react';

import Header from './header/Header';
//import Admin from '../components/Admin/Adminlogin';

//import User from '../components/User/UserVaccineRegistration';
import Nurse from '../components/Nurse/NurseLogin';
import Home from '../components/Home/Home';
import Auth from '../components/Auth/Auth';
import { Route, } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';

const Main = props => {
    return (
        <div>
           <Header />
             <div className="container">
                {/* <Route path="/admin" component={Admin} /> */}
                <Route path="/user" component={Auth} />
                <Route path="/nurse" exact component={Nurse} />
                <Route path="dashboard/*" component={Dashboard}/>
                <Route path="/" exact component={Home} />
            </div>
        </div>
    )
}


export default Main;