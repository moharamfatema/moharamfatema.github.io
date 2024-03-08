import React from 'react'

import AliceCarousel from 'react-alice-carousel'

import Project from './components/Project'
import { projects } from '../../shared/data/projects'

import 'react-alice-carousel/lib/alice-carousel.css'


const Projects = () => {

    if (!Array.isArray(projects) || projects.length <= 0) {
        return null
    }

    return (
        <div className='section-wrapper projects w-full ' id='projects'>
            <a href='#projects' className='section'>
                <p className='section-hash'
                >#</p>
                <h1 className='section-title'>Featured Projects Gallery</h1>
            </a>
            <div className='flex mt-4 justify-start'>
                <AliceCarousel
                    autoPlay
                    autoPlayInterval={3000}
                    autoPlayStrategy='all'
                    autoHeight
                    infinite
                    mouseTracking
                    items={projects.map((project, index) => (
                        <Project key={index} project={project} />
                    ))}
                />
            </div>

        </div>
    )
}

export default Projects
