import React from 'react';
import Card from 'react-bootstrap/Card';



export default function CocktailCard({cocktailName, imageSrc, cocktailId, handleCardClick}) {

    return (
        
            <div className="four wide column">
                <div className="ui centered card" onClick={() => handleCardClick(cocktailId)}>

                    <div className="image">
                        <img src={imageSrc}/>
                    </div>

                    <div className="content">
                        <div className="header">{cocktailName}</div>
                    </div>

                </div>
            </div>
    
    );
        {/* // <React.Fragment>
        //     <Card style={{ width: '18rem' }} onClick={() => handleCardClick(cocktailId)}>
        //         <Card.Img variant="top" src={imageSrc} />
        //         <Card.Body>
        //             <Card.Title>{cocktailName} </Card.Title>
        //         </Card.Body>
        //     </Card>
        // </React.Fragment> */}
        

}

