import React, {useEffect, useState} from 'react';

const usePosition = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const foo = (e: MouseEvent) => {
        setPosition({
            x : e.pageX,
            y : e.pageY
        })
    }

    useEffect(() => {
        document.addEventListener("mousemove", foo);
        return () => document.removeEventListener("mousemove", foo)
    },[])

    return position;
}

export default usePosition;

