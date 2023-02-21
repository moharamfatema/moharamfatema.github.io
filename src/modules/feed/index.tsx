import React, {useEffect, useState} from 'react'

const Feed = () => {
    const ID = 'CpqdOdxOFaLmzKuk'
    const [widgetCode, setWidgetCode] = useState('')
    useEffect(() => {
        const fetchData = () => {
            fetch('https://api.rss.app/v1/imageboard.js',{mode: 'no-cors',headers: {'type': 'text/javascript'}})
                .then(data => {
                    console.log(data)
                    return data.text()})
                .then(data => setWidgetCode(data))
                .catch(error => console.log(error))

        }

        fetchData()
    }, [])
    return (
        <div className='feed' dangerouslySetInnerHTML={{ __html: widgetCode }} />
        // <iframe title='feed' width="100%" height="500"  src={'https://rss.app/embed/v1/imageboard/'+ID}></iframe>
    )
}

export default Feed
