import React,{FC} from 'react'
import picture from '../../assets/Picture.png'
import Summary from './components/Summary'

const Home : FC= () => {
    return (
        <div className="first-view">
            <div className="overview flex flex-col items-center px-9 justify-evenly gap-9">
                <img src={picture} alt="Picture" className='max-w-[366px] max-h-[366px]'/>
                <Summary/>
                <div className="resume max-w-xs flex items-center flex-col">
                    <a
                        title='Get My Resume'
                        className='bg-primary-yellow rounded-full p-4 text-primary-dark w-full flex items-center justify-center gap-2'
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