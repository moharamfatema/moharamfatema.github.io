import React from 'react'
import { skills } from '../../shared/data/skills'

const About = () => {
    return (
        <article className="about w-full section-wrapper" id='about'>
            <a href='#about' className='section'>
                <p className='section-hash'
                >#</p>
                <h1 className='section-title'>Meet the Developer</h1>
            </a>
            <p className='text-justify section-content pt-7'>
            Hello, I&apos;m Fatema, a passionate software and machine learning engineer with a curiosity for exploring the endless possibilities of technology.
            </p>
            <div className="subsections grid gap-7 md:grid-cols-2 grid-cols-1">
                <div className="edu subsection">
                    <h2 className='subsection-title'>Education</h2>
                    <p>
                        I&apos;m currently pursuing my senior year in a &nbsp;
                        <strong>
                            Bachelor&apos;s degree in Computer and Communications
                            Engineering
                        </strong> with a
                        CGPA of 3.3 from Alexandria University. I&apos;ve
                        also completed relevant courses and certifications
                        such as the Convolutional Neural Networs Course
                        from Coursera, Machine Learning Crash Course from
                        Google, FCC Front-End Development, and the Data
                        Analysis Challenger track from Udacity and egfwd.
                    </p>
                </div>
                <div className="exp subsection">
                    <h2 className='subsection-title'>Professional Experience</h2>
                    <p>
                        I have experience as a <strong>Software Engineering Intern</strong> at &nbsp;
                        <a href="https://rubikal.com" target='_blank' rel='noreferrer noopener' className='exp-link'>
                            Rubikal LLC.
                        </a>
                        , where I worked on full-stack web development using
                        <i> Ruby on Rails and ReactJS </i> to build Resoom from scratch.
                        I&apos;ve also worked as a <strong>Web Development Trainee</strong> at &nbsp;
                        <a href="https://squadio.com/" target='_blank' rel='noreferrer noopener' className='exp-link'>
                            Ibtikar Technologies
                        </a>
                        , where I gained experience in front-end development using React,
                        Json-server, APIs, Bootstrap, and charting libraries, among other
                        things.
                    </p>
                </div>
                <div className="subsection skills md:col-span-2">
                    <h2 className='subsection-title'>Skills</h2>
                    <div className="skills-wrapper tags">
                        {skills.map(({skill,link}) => (
                            <a className="skill tag bg-purple-900" key={skill} href={link} target='_blank' rel='noreferrer noopener'>
                                {skill}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default About
