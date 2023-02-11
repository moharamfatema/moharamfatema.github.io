import React,{FC} from 'react'
import Picture from './components/Picture'
import Summary from './components/Summary'

const Home : FC= () => {

    return (
        <div className="home grid grid-cols-1 lg:grid-cols-3 gap-9" id='home'>
            <Picture/>


            <div className="">
                <Summary/>
            </div>
        </div>
    )
}

export default Home
