import React from 'react'
import pict from '../../../../assets/img/result.webp'

const Picture = () => {

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
        <div className="pic-wrapper col-span-2">
            <div id="pic-container"
                onMouseMove={handleMouseMove}
            >
                <img id="pic" src={pict} alt='website' className='website'
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
            <p className='hidden md:block py-2'>Tip: hover over this picture for some magic!</p>
        </div>

    )
}

export default Picture
