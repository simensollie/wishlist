import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/new">New list</NavLink>
        </div>
    );
};

export default Navigation;