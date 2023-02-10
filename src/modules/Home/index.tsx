import React,{FC} from 'react'
import Summary from './components/Summary'

const Home : FC= () => {

    const handleMouseMove = (e: React.MouseEvent) => {
        const pic = document.querySelector('#pic') as HTMLElement
        const glowing = document.querySelector('#glowing') as HTMLElement
        const highlight = document.querySelector('.highlight') as HTMLElement
        const mouseX = e.clientX - pic.getBoundingClientRect().left
        const mouseY = e.clientY - pic.getBoundingClientRect().top

        glowing.style.setProperty('--mouse-x', mouseX - 20 + 'px')
        glowing.style.setProperty('--mouse-y', mouseY - 20 + 'px')
        highlight.style.setProperty('--mouse-x', mouseX + 'px')
        highlight.style.setProperty('--mouse-y', mouseY + 'px')
    }

    return (
        <div className="home grid lg:grid-cols-2 gap-5 p-7 lg:p-20">
            <div className="pic-wrapper">
                <div id="pic-container"
                    onMouseMove={handleMouseMove}
                >
                    <img id="pic" src='https://cdn.midjourney.com/c8305050-2eb6-401e-93c9-3e239a958fad/grid_0.png' alt='website' className='website'
                    />
                    <div id="highlight" className='highlight'></div>
                    <div className={'glowing'} id='glowing' ></div>
                    <div id="hover"
                        onMouseEnter={
                            () => {
                                const glowing = document.querySelector('#glowing') as HTMLElement
                                const highlight = document.querySelector('#highlight') as HTMLElement
                                glowing.style.setProperty('opacity', '1')
                                highlight.style.setProperty('opacity', '0.9')
                                const root = document.querySelector(':root') as HTMLElement
                                root.style.setProperty('cursor', 'none')
                            }
                        }
                        onMouseLeave={
                            () => {
                                const glowing = document.querySelector('#glowing') as HTMLElement
                                const highlight = document.querySelector('#highlight') as HTMLElement
                                glowing.style.setProperty('opacity', '0')
                                highlight.style.setProperty('opacity', '0')
                                const root = document.querySelector(':root') as HTMLElement
                                root.style.setProperty('cursor', 'default')
                            }
                        }
                    ></div>
                </div>
                <p className='hidden md:block'>Tip: over over this picture for some magic!</p>
            </div>


            <div className="overview flex flex-col items-center justify-evenly gap-9">
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
