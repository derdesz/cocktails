import React from 'react';
import Card from 'react-bootstrap/Card';


export default function CocktailCard({cocktailName, imageSrc, cocktailId, handleCardClick}) {
    return (
        <React.Fragment>
            <Card style={{ width: '18rem' }} onClick={() => handleCardClick(cocktailId)}>
                <Card.Img variant="top" src={imageSrc} />
                <Card.Body>
                    <Card.Title>{cocktailName} </Card.Title>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

