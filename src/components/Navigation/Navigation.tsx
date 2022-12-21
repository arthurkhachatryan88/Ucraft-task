import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation: React.FunctionComponent = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className="ml1">Users</NavLink>
                </li>
                <li>
                    <NavLink to="/mouse-moving" className="ml1">Mouse</NavLink>
                </li>
                <li>
                    <NavLink to="/render-counter" className="ml1">Render Counter</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;