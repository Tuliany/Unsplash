import react, { useState, useEffect } from 'react';

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
            <div class="middle">
                <div id="text" class="M">M</div>
                <div id="text" class="M">0</div>
                <div id="text" class="M">B</div>
                <div id="text" class="M">I</div>
                <div id="text" class="M">E</div>
                <div id="text" class="M">N</div>
                <div id="text" class="M">T</div>
                <div id="text" class="M">0</div>
            </div>
        </div>
    )

}