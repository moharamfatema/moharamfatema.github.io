import React,{FC} from 'react'
import Picture from './components/Picture'
import Summary from './components/Summary'

const Home : FC= () => {

    return (
        <div className="home flex flex-col lg:grid lg:grid-cols-3 gap-9" id='home'>
            <Picture/>
            <div>
                <Summary/>
            </div>
        </div>
    )
}

export default Home
