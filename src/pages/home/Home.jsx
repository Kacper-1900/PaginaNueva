import React from 'react';
import './Home.css';

function Home() {
    const images = [

            {
                id: 1,
                name: "Beauty of Nature",
                description: "Beautiful landscape photography",
                photographer: "Kacper",
                image: ""
            },
            {
                id: 2,
                name: "City Lights",
                description: "Urban photography at night",
                photographer: "Kacper",
                image: ""
            },
            {
                id: 3,
                name: "Portrait of a Stranger",
                description: "Capturing the essence of a person",
                photographer: "Josephine",
                image: ""
            },
            {
                id: 4,
                name: "Wildlife Wonders",
                description: "Stunning wildlife photography",
                photographer: "Laura",
                image: ""
            },
            {
                id: 5,
                name: "Abstract Art",
                description: "Creative and unique abstract photography",
                photographer: "Michael",
                image: ""
            }
        ];  
    return (
        <div className = "home" >
            <h1>Bienvenido a PicturesKacper</h1>
            <p>Explora nuestra colección de fotos impresionantes.</p>
            <div className="image-box">
                {images.map((image) => (
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