import React, { useState } from 'react';
import './Home.css';

function Home() {

    const [searchTerm, setSearchTerm] = useState("");

    const images = [
        {
            id: 1,
            name: "Beauty of Nature",
            description: "Beautiful landscape photography",
            photographer: "Kacper",
            image: "/nature.png"
        },
        {
            id: 2,
            name: "City Lights",
            description: "Urban photography at night",
            photographer: "Kacper",
            image: "/city.png"
        },
        {
            id: 3,
            name: "Portrait of a Stranger",
            description: "Capturing the essence of a person",
            photographer: "Josephine",
            image: "/stranger.png"
        },
        {
            id: 4,
            name: "Wildlife Wonders",
            description: "Stunning wildlife photography",
            photographer: "Laura",
            image: "/wildlife.png"
        },
        {
            id: 5,
            name: "Abstract Art",
            description: "Creative and unique abstract photography",
            photographer: "Michael",
            image: "/abstract.png"
        },
        {
            id: 6,
            name: "Flowers",
            description: "Incredible flowers",
            photographer: "Jose Perez",
            image: "/flowers.png"
        },
        {
            id: 7,
            name: "Sunshine",
            description: "Sun",
            photographer: "Laura Sánchez",
            image: "/sunshine.png"
        },
        {
            id: 8,
            name: "Wildlife",
            description: "Amazing wildlife picture",
            photographer: "Rafael Hernandez",
            image: "/wildlifeRafael.png"
        },
        {
            id: 9,
            name: "Woman",
            description: "Woman explaining stuff",
            photographer: "Iván Brito",
            image: "/woman.png"
        },
        {
            id: 10,
            name: "Lost",
            description: "Painting showing emotions of creator",
            photographer: "Raul Rauliano",
            image: "/lost.png"
        }
    ];

    const filteredImages = images.filter(image =>
        image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.photographer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home">
            <h1>PicturesKacper</h1>

            <input
                type="text"
                placeholder="Buscar por nombre o fotografo."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            <div className="image-box">
                {filteredImages.map((image) => (
                    <div key={image.id} className="image-card">
                        <img src={image.image} alt={image.name} />
                        <h3>{image.name}</h3>
                        <p>{image.description}</p>
                        <p><em>Fotógrafo: {image.photographer}</em></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;