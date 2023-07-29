import React from 'react'

const Navbar : React.FC = () => {

    const hashes = [
        {
            name: 'Home',
            hash: '#home'
        },
        {
            name: 'About Me',
            hash: '#about'
        },
        {
            name: 'The Wizarding Web',
            hash: '#feed'
        },
        {
            name: 'Featured Projects',
            hash: '#projects'
        },
        {
            name: 'Get in Touch',
            hash: '#contacts'
        }
    ]
    const [active, setActive] = React.useState({
        show: 'hidden',
        icon: 'fa-bars',
    })

    return (
        <div>
            <nav className="navbar bg-background-darker w-[100vw] shadow-lg shadow-black" id="mainNav">
                <div className="">
                    <button className="navbar-toggler navbar-toggler-right p-2 lg:hidden text-center w-full" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={
                        () => {
                            setActive({
                                show: active.show === 'hidden' ? '' : 'hidden',
                                icon: active.icon === 'fa-bars' ? ' fa-times' : 'fa-bars'
                            })
                        }
                    }>
                        <i className={'fa '+active.icon}></i>
                    </button>
                    <div className="navbar-line w-full border-b-2 border-b-purple-600">
                    </div>
                    <div className={'navbar-collapse bg-background-darker w-full text-center lg:block'+active.show} id="navbarResponsive">
                        <ul className={'navbar-nav uppercase ml-auto lg:flex '+active.show}>
                            {
                                hashes.map((hash, index) => {
                                    return (
                                        <li className="nav-item border-b-2 border-b-purple-600 hover:bg-background-dark w-full h-full" key={index}>
                                            <a href={hash.hash} className='p-4'>
                                                {hash.name}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
