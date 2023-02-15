import React from 'react'

const About = () => {
    return (
        <div className="about w-full section-wrapper" id='about'>
            <a href='#about' className='section'>
                <p className='section-hash'
                >#</p>
                <h1 className='section-title'>Meet the Developer</h1>
            </a>
            <p className='text-justify py-7'>{'Hi, I\'m Fatema, a passionate software engineer with experience in full-stack web development and machine learning. I am studying Computer and Communications Engineering at Alexandria University, and have completed various relevant courses and certifications. I\'m a skilled problem solver with a keen eye for detail and a love for creating beautiful, functional web applications.'}</p>
        </div>
    )
}

export default About
