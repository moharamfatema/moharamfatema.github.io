import React from 'react'
import './App.css'

import Home from './modules/Home'

function App() {

    const [mouseX, setMouseX] = React.useState(0)
    const [mouseY, setMouseY] = React.useState(0)

    const handleMouseMove = (e: React.MouseEvent) => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }

    return (
        <div className="App" onMouseMove={handleMouseMove}>
            <div className="glowing" id='glowing' style={
                {
                    left : mouseX,
                    top  : mouseY,
                }
            }></div>
            <Home/>
        </div>
    )
}

export default App
