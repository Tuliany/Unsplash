import react, { useState, useEffect } from 'react';
import Image from 'next/image';

export const GetPics = () => {
    const [pics, setPics] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/cat')
            .then(res => res.json())
            .then(json => setPics(json.results))
    }, [])

    return (
        <div className="grid-frame">
            {pics.map(pic => (
                <img src={`${pic.urls.regular}`} />
            ))}
        </div>
    )

}