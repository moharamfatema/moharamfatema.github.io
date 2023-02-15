import React from 'react'

import About from './modules/About'
import Contacts from './modules/Contacts'
import Home from './modules/Home'
import Projects from './modules/Projects'
import Navbar from './modules/Navbar'

function App() {
    return (
        <div className="App" >
            <Navbar/>

            <div className="sections">
                <Home/>
                <About/>
                <Projects/>
                <Contacts/>
            </div>

        </div>
    )
}

export default App