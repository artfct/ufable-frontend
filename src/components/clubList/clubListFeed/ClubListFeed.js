import React from 'react'
import './ClubListFeed.css'
import ClubCard from './clubCard/ClubCard.js'

const ClubListFeed = ({clubCards}) => {
    return (
        <div className='clublist'>
            {clubCards.map((clubCard) => (
                <ClubCard key={clubCard.id} clubCard={clubCard}/>
            ))}
        </div>
    )
}

export default ClubListFeed
