import React, { useEffect, useState } from "react"
import accommodations from '../logements.json'

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const infiniteScroll = () => {
        if (currentIndex === accommodations.pictures.length-1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    useEffect(() => {
        
    }
    
    )

 

    return (
        <div className="info__carousel">
            { accommodations.pictures.map((picture, index) => {
                <div key={index}>
                    <img  alt="images du logement" src={picture} />
                    <h4>{index + 1}/{accommodations.pictures.length}</h4>
                </div>
            })
            }

        </div>
    )
}

export default Carousel