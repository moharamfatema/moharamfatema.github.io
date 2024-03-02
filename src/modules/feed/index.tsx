import React, {useEffect, useState} from 'react'
import { XMLParser} from 'fast-xml-parser'

interface IFeedItem {
    title: string
    description: string
    link: string
    cover_image: string
    guid: string
}

const Feed = () => {
    const url = 'https://wizardingweb.hashnode.dev/rss.xml'
    const proxy = 'https://portfolio-cors-f1bfc9d1a608.herokuapp.com/'
    // const proxy = 'http://localhost:5000/'
    const [feed, setFeed] = useState<IFeedItem[]>([])

    const parser = new XMLParser({
        attributeNamePrefix: '',
        textNodeName: '$text',
        ignoreAttributes: false,
    })

    useEffect(() => {
        const rss_url = proxy + url

        fetch(rss_url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/xml',
                'Access-Control-Allow-Origin': '*',
            },
            mode: 'cors',

        })
            .then(res => res.text()).then(res =>{
                const items = parser.parse(res).rss?.channel?.item.slice(0, 3) || []
                setFeed(items)
            })

    }, [])


    return (
        <article className='feed section-wrapper' id='feed'>
            <a href='#feed' className='section'>
                <p className='section-hash'
                >#</p>
                <h1 className='section-title'>The Wizarding Web</h1>
            </a>
            <div className='subsections grid grid-cols-1 lg:grid-cols-3 gap-10 pt-6'>
                {feed && feed.map((item: IFeedItem) => {

                    return (
                        <a
                            key={item.link}
                            href={item.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='subsection bg-background-darker rounded-lg p-5 h-fit'
                        >
                            <div
                                className='w-full aspect-video overflow-hidden rounded-lg'
                            >
                                <img src={item.cover_image} alt={item.title}/>
                            </div>
                            <div className='h-15 lg:h-24 flex items-center'>
                                <h2
                                    className='subsection-title wrap align-middle'
                                >{item.title}</h2>
                            </div>
                            <p
                                className='feed-description overflow-hidden opacity-80 text-sm'
                                dangerouslySetInnerHTML={{__html: item.description}}
                            ></p>

                        </a>
                    )
                })

                }
            </div>
            <div className='flex w-full'>
                <a
                    href='https://wizardingweb.hashnode.dev/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-10 mx-auto font-semibold p-3 md:p-5 bg-purple-800 rounded-full text-center wrap text-sm md:text-base'
                >Explore The wizarding Web</a>
            </div>
        </article>
    )
}

export default Feed
