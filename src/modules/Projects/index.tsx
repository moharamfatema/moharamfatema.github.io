import React from 'react'
import Project from './components/Project'
import { projects } from '../../shared/data/projects'
const Projects = () => {

    // carousel
    const [current, setCurrent] = React.useState(0)
    const length = projects.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(projects) || projects.length <= 0) {
        return null
    }

    return (
        <div className='section-wrapper projects w-full min-h-screen' id='projects'>
            <a href='#projects' className='section'>
                <p className='section-hash'
                >#</p>
                <h1 className='section-title'>Featured Projects Gallery</h1>
            </a>
            <div className='grid grid-cols-1 gap-4 mt-4 min-h-full'>

                <div className='flex justify-center content-center items-center'>
                    <div className="slide-btn wrap"
                        onClick={
                            () => {
                                document.getElementById('prev-slide')?.click()
                            }
                        }
                    >
                        <button onClick={prevSlide} title='Previous Slide' id='prev-slide'>
                            <i className='fas fa-chevron-left'></i>
                        </button>
                    </div>
                    <Project project={projects[current]} />

                    <div className="slide-btn wrap relative rounded-full cursor-pointer"
                        onClick={
                            () => {
                                document.getElementById('next-slide')?.click()
                            }
                        }
                    >
                        <button  onClick={nextSlide} title='Next Slide' id='next-slide'>
                            <i className='fas fa-chevron-right'></i>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Projects
