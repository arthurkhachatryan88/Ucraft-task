import React from 'react';
import usePosition from '../hooks/usePosition';
import UserCard from "../Users/UserCard";

const MouseMoving: React.FunctionComponent = () => {
    const { x, y } = usePosition();

    return (
        <div className="mouse-moving mt5">
            <div className="container">
                <h4>Active state mouse</h4>
                <h6 className="mt1">x: {x}, y: {y}</h6>
            </div>
        </div>
    )
}

export default MouseMoving;

