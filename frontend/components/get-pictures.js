import react, { useState, useEffect } from 'react';
import Image from 'next/image';

export const GetPics = () => {
    const [pics, setPics] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api')
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