import React, { FC } from 'react'
import { IProject } from '../../../shared/types/types'

interface IProps {
    project: IProject
}

const Project:FC<IProps> = ({project}) => {
    return (
        <div className=' w-full '>
            <div className='flex flex-col content-center justify-center align-middle gap-4 p-7 bg-background-darker rounded-md m-4 text-center h-full'>
                <h1 className='text-xl md:text-3xl font-normal text-white'>{project.name}</h1>
                <p className='text-sm md:text-base text-white m-auto md:text-justify text-center'>{project.description}</p>
                <div className='flex m-auto'>
                    <a href={project.repo} target='_blank' rel='noreferrer' className='project-link '>
                        <i className='fab fa-github mr-2 '></i>
                                    Github
                    </a>
                    {project.link !== ''
                        ?    <a href={project.link} target='_blank' rel='noreferrer' className='project-link'>
                            <i className='fas fa-rocket mr-2'></i>
                                        Live
                        </a>

                        :<></>}


                </div>
                {/* tags */}
                <div className="tags_wrapper flex gap-3 justify-center  content-center m-auto">
                    <h2 className='text-xs md:text-base font-medium text-white mt-2'>Tags: </h2>
                    <div className='tags'>
                        {project.tags.map((tag) => (
                            <span className='tag ' key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
                {/* image */}
                <div className='h-fit mx-auto'>
                    <img src={project.image} alt={project.name} className='rounded-md max-h-[55vh]' height='50%' width='auto'/>
                </div>
            </div>
        </div>

    )
}

export default Project
