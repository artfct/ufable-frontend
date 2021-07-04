import React from 'react'
import './ClubListFeed.css'
import ClubCard from './clubCard/ClubCard.js'

const ClubListFeed = ({clubCards}) => {
    const columns = clubCards[0] && Object.keys(clubCards[0])
    return (
        <div className='clublist'>
            
            {clubCards.map((clubCard) => (
                <ClubCard key={clubCard.id} clubCard={clubCard}/>
            ))}
            
            {/* {clubCards.map(row => 
                {
                    columns.map(column => <ClubCard key={row[column].id} clubCard={row[column]}/>)
                }
            )} */}
        </div>
    )
}

export default ClubListFeed
