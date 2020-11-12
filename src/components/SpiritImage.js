import React from 'react'

export const SpiritImage = ({spirit, number}) => {
    
    return (
        <div  >
            <img src={`/assets/images/${spirit}.jpg`} id={`spirit-image${number}`} className="spirit-image"/>
        </div>
    )
}
