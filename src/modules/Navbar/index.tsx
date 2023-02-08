import React from 'react'

const Navbar : React.FC = () => {

    const hashes = [
        {
            name: 'Home',
            hash: '#home'
        },
        {
            name: 'About',
            hash: '#about'
        },
        {
            name: 'Skills',
            hash: '#skills'
        },
        {
            name: 'Projects',
            hash: '#projects'
        },
        {
            name: 'Contact',
            hash: '#contact'
        }
    ]
    const [active, setActive] = React.useState({
        show: 'hidden',
        icon: 'fa-bars',
    })

    return (
        <div>
            <nav className="navbar bg-background-darker w-[100vw] shadow-md shadow-black" id="mainNav">
                <div className="">
                    <button className="navbar-toggler navbar-toggler-right p-2 md:hidden text-center w-full" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={
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
                    <div className={'navbar-collapse bg-background-darker w-full text-center md:block'+active.show} id="navbarResponsive">
                        <ul className={'navbar-nav uppercase ml-auto md:flex '+active.show}>
                            {
                                hashes.map((hash, index) => {
                                    return (
                                        <li className="nav-item p-4 border-b-2 border-b-purple-600 hover:bg-background-dark w-full" key={index}>
                                            <a href={hash.hash}>
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
