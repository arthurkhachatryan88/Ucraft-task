import React, { useState, useEffect, useRef } from 'react';

const RenderCounter: React.FunctionComponent = () => {
    const [value, setValue] = useState('')
    const renderCount = useRef(0)

    useEffect(() => {
        renderCount.current++
    })

    return (
        <div className="render-count mt5">
            <div className="container">
                <h4>Active state rend</h4>
                <h6 className="mt1">Render count: {renderCount.current}</h6>
                <input
                    type="text"
                    className="mt1"
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />
            </div>
        </div>
    )
}

export default RenderCounter;