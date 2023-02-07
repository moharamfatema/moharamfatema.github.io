import React,{FC} from 'react'
import Summary from './components/Summary'

const Home : FC= () => {
    return (
        <div className="home">
            <div id="auta-thingy" className='w-5'></div>
            <img src='https://cdn.midjourney.com/c8305050-2eb6-401e-93c9-3e239a958fad/grid_0.png' alt='website' className='website'/>
            <div className="overview flex flex-col items-center px-9 justify-evenly gap-9">
                <Summary/>
                <div className="resume btn max-w-xs flex items-center flex-col">
                    <a
                        title='Get My Resume'
                        className='resume link w-full flex items-center justify-center gap-2'
                        href='https://drive.google.com/uc?export=download&id=1YUeh4piNVTPcwcngSEieFL6VLfftLIXG'
                        download={true}
                    >
                        <i className="fas fa-download"></i>
                        <span className='text-center text-2xl font-bold'>Get My Resume</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
