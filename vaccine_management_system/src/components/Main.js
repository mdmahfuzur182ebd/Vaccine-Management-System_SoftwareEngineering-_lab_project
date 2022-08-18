import React from 'react';

import Header from './header/Header';

// import Home from './Home/Home';
// import Admin from '../components/Admin/Admin';
//import User from '../components/User/UserVaccineRegistration';
import VaccineRegInfo from './Admin/VaccineRegistrationInfo/VaccineRegInfo';
 //import Nurse from '../components/Nurse/NurseLogin';


// import { Route } from 'react-router-dom';

const Main = props => {
    return (
        <div>
           <Header />
             {/* <div className="container">
                <Route path="/admin" component={Admin} />
                <Route path="/vaccines" component={Vaccines} />
                <Route path="/user" component={User} />
                <Route path="/nurse" exact component={Nurse} />
                <Route path="/" exact component={Home} />
            </div> */}
            <VaccineRegInfo/>
           

        </div>
    )
}


export default Main;