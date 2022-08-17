import React from 'react';
import Header from './header/Header';
// import Home from './Home/Home';
// import Admin from '../components/Admin/Admin';
// import User from '../components/User/User';
// import Nurse from '../components/Nurse/Nurse';


// import { Route } from 'react-router-dom';

const Main = props => {
    return (
        <div>
           <Header />
             {/* <div className="container">
                <Route path="/admin" component={Admin} />
                <Route path="/user" component={User} />
                <Route path="/nurse" exact component={Nurse} />
                <Route path="/" exact component={Home} />
            </div> */}
        </div>
    )
}


export default Main;