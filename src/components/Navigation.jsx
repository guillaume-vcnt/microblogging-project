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
                    <li>User Profil</li>
                </NavLink>
                <NavLink to="/wall">
                    <li>Wall</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;