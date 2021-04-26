import react, { useState, useEffect } from 'react';

export const GetPics = () => {
    const [pics, setPics] = useState([]);

    useEffect(() => {
        fetch("https://api.unsplash.com/search/photos/?query=rio&client_id=dczmf10Kpo8SKPLX4jL3DoAB7m7AIijc0uE0C0icYNA")
            .then(res => res.json())
            .then(json => setPics(json.results))
    }, [])

    return (
        <div class="frame">
            {pics.map(pic => (
                <img src={`${pic.urls.regular}`} height="250" width="250"/>
            ))}
        </div>
    )

}