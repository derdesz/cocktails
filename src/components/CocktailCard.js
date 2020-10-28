import React from 'react';
import Card from 'react-bootstrap/Card';


export default function CocktailCard({cocktailName, imageSrc}) {
    return (
        <React.Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageSrc} />
                <Card.Body>
                    <Card.Title>{cocktailName} </Card.Title>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}
