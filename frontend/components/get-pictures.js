import { useState, useEffect } from 'react';

export const GetPics = () => {
    const [pics, setPics] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/unsplash')
            .then(res => res.json())
            .then(json => setPics(json.results))
    }, [])

    return (
        <div className="gallery">
            {pics.map(pic => (
               <img src={`${pic.urls.regular}`} />
            ))}
        </div>
    )
}