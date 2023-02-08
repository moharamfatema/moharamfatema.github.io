import React,{FC} from 'react'
import Summary from './components/Summary'

const Home : FC= () => {

    const [mouseX, setMouseX] = React.useState(0)
    const [mouseY, setMouseY] = React.useState(0)
    const [glowing, setGlowing] = React.useState('hidden')

    const handleMouseMove = (e: React.MouseEvent) => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }

    return (
        <div className="home grid lg:grid-cols-2 gap-5 p-7 lg:p-20">
            <div id="pic" onMouseMove={handleMouseMove} onMouseEnter={
                () => {
                    setGlowing('')
                    document.querySelector('#root')?.classList.add('cursor-none')
                }
            }
            onMouseLeave={
                () => {
                    setGlowing('hidden')
                    document.querySelector('#root')?.classList.remove('cursor-none')
                }
            }>
                <div className={'glowing '+glowing} id='glowing' style={
                    {
                        left : mouseX - 10,
                        top  : mouseY - 15,
                    }
                }></div>
                <img src='https://cdn.midjourney.com/c8305050-2eb6-401e-93c9-3e239a958fad/grid_0.png' alt='website' className='website'
                />
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
