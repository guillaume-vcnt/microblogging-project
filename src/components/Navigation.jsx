import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/">
                    <li>Login</li>
                </NavLink>
                <NavLink to="/userprofil">
                    <li><button>User Profil</button></li>
                </NavLink>
                <NavLink to="/wall">
                    <li>Wall</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;