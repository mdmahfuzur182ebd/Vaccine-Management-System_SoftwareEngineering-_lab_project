import React from 'react';

import Header from './header/Header';
import User from './User/User';

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
                <Route path="/vaccines" component={Vaccines} />
                <Route path="/user" component={User} />
                <Route path="/nurse" exact component={Nurse} />
                <Route path="/" exact component={Home} />
            </div> */}
          
            <User/>
          

        </div>
    )
}


export default Main;