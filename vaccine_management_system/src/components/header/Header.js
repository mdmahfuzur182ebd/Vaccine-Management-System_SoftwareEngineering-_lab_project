import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import Logo from '../../assets/left3.png';

const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{
                backgroundColor: "#f26d3e",
                height: "85px",
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={Logo} alt="Logo" width="80px" />
                    <NavbarBrand  lassName="mr-auto ml-md-5 Brand" >Vaccine Management System</NavbarBrand>
                </NavbarBrand>
               
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink exact to="/" className="NavLink">Home</NavLink>
                    </NavItem>
                     <NavItem>
                        <NavLink exact to="/admin" className="NavLink">Admin</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/user" className="NavLink">User</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/nurse" className="NavLink">Nurse</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;