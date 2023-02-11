import React from 'react'

import Home from './modules/Home'
import Projects from './modules/Projects'
// import Navbar from './modules/Navbar'

function App() {
    return (
        <div className="App p-7 lg:p-20 grid grid-cols-1 gap-9" >

            {/* <Navbar/> */}
            <Home/>
            <Projects/>
        </div>
    )
}

export default App
