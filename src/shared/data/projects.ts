import { IProject } from '../types/types'
import motiv from '../../assets/img/projects/Motiv..webp'
import mmc from '../../assets/img/projects/mmc.webp'
import pomodoro from '../../assets/img/projects/pomodoro.webp'
import blog from '../../assets/img/projects/blog.webp'
import landing from '../../assets/img/projects/landing.webp'
import piano from '../../assets/img/projects/piano.webp'
import quote from '../../assets/img/projects/quote.webp'
import calculator from '../../assets/img/projects/calc.webp'
import md from '../../assets/img/projects/mdprev.webp'

export const projects:IProject [] = [
    {
        id: 1,
        name: 'Motiv.',
        description: 'Motiv. project is an illustration of my ability to convert UI/UX designs into a web application. The project is built using React, and Typescript. In this project, I converted 2 pages: Dashboard, and booking page.',
        link: 'https://moharamfatema.github.io/car-dashboard/',
        image: motiv,
        tags: ['React', 'Typescript','tailwindcss', 'gh-pages','amcharts','google-charts'],
        repo: 'https://github.com/moharamfatema/car-dashboard'
    },
    {
        id: 2,
        name: 'MMC And LMC Calculator',
        description: 'MMC And LMC Calculator is a web application that calculates the Maximum material condition (MMC) and the Least material condition (LMC) of a structure.',
        link: 'https://mmc-calculator.excedify.com/',
        image: mmc,
        tags: ['React', 'Typescript', 'UI/UX', 'tailwindcss','gh-pages'],
        repo: 'https://github.com/moharamfatema/lmc-and-mmc-calculator/'
    },
    {
        id: 3,
        name: 'Pomodoro',
        description: 'Pomodoro is a web application that helps you to manage your time. ',
        link: 'https://moharamfatema.github.io/pomodoro/',
        image: pomodoro,
        tags: ['React', 'Typescript', 'UI/UX','vanilla-css', 'gh-pages'],
        repo: 'https://github.com/moharamfatema/pomodoro/'
    },
    {
        id: 4,
        name: 'Blog',
        description: 'Blog is a web application that allows users to create, read, update, and delete posts.',
        repo: 'https://github.com/moharamfatema/blog-rails',
        tags: ['Ruby on Rails', 'UI/UX', 'Sqlite', 'PostgreSQL', 'Bootstrap'],
        image: blog,
        link: '',
    },
    {
        id: 5,
        name: 'Landing Page',
        description: 'A Signup landing page for a fictional company.',
        repo: 'https://github.com/moharamfatema/signup-form-react',
        tags: ['React', 'Bootstrap'],
        image: landing,
        link:'',
    },
    {
        id: 6,
        name: 'Piano Chords',
        description: 'Piano Chords is a web application that allows users to play piano chords.',
        repo: 'https://github.com/moharamfatema/piano-chords',
        tags: ['React', 'vanilla-css'],
        image: piano,
        link: 'https://moharamfatema.github.io/piano-chords/',
    },
    {
        id: 7,
        name: 'Random Quote Generator',
        description: 'Random Quote Generator is a web application that generates random quotes.',
        repo: 'https://github.com/moharamfatema/random-quote-react',
        link:  'https://codepen.io/moharamfatema/full/qBoPgBg',
        tags: ['React', 'Bootstrap'],
        image: quote,
    },
    {
        id: 8,
        name: 'Calculator',
        description: 'Calculator is a web application that performs basic arithmetic operations.',
        repo: 'https://github.com/moharamfatema/web-calculator',
        link: 'https://moharamfatema.github.io/web-calculator/',
        tags: ['React', 'Redux', 'vanilla-css', 'gh-pages', 'react-redux'],
        image: calculator,
    },
    {
        id: 9,
        name: 'Markdown Previewer',
        description: 'Markdown Previewer is a web application that allows users to write in markdown and preview the output.',
        repo: 'https://github.com/moharamfatema/markdown-previewer-react/',
        link: 'https://moharamfatema.github.io/markdown-previewer-react/',
        tags: ['React', 'vanilla-css', 'gh-pages'],
        image: md,
    }
]
