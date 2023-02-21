import React, {useEffect, useState} from 'react'

const Feed = () => {
    const url = 'https://wizardingweb.hashnode.dev/rss.xml'
    const [feed, setFeed] : any = useState()

    // setting RSS .app widget
    useEffect(() => {
        const url = 'https://rss.app/feeds/CpqdOdxOFaLmzKuk.xml'
        fetch(url)
            .then(res => res.text())
            .then(res => {
                // console.log(res)
                const parser = new DOMParser()
                const xml = parser.parseFromString(res, 'text/xml')
                const items = xml.querySelectorAll('item')
                const feed = Array.from(items).map((item: any) => {
                    console.log(item)
                    return {
                        title: item.querySelector('title').textContent,
                        link: item.querySelector('link').textContent,
                        description: item.querySelector('description'),
                        guid: item.querySelector('guid').textContent,
                        image: item.querySelector('[medium=image]').getAttribute('url').textContent,
                    }
                })

                setFeed(feed)

            })
    }, [])


    return (
        <div className='feed'>
            <h1>Feed</h1>
            {feed && feed.map((item: any) => {

                return (
                    <div key={item.guid}>
                        <h2>title: {item.title}</h2>
                        <p>description: {item.description}</p>
                        image:
                        <img src={item.image} alt={item.title}/>
                    </div>
                )
            })

            }
        </div>
    )
}

export default Feed
