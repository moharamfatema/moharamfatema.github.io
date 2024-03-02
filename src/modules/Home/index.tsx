import React,{FC} from 'react'
import Picture from './components/Picture'
import Summary from './components/Summary'

const Home : FC= () => {

    return (
        <div className="home flex flex-col lg:grid lg:grid-cols-3 gap-9 mt-4" id='home'>
            <div>
                <Summary/>
            </div>
            <Picture/>
        </div>
    )
}

export default Home
