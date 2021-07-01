import React from 'react'
import './ClubTag.css'

const ClubTag = ({clubTag}) => {
    return (
        <div className='clubTag'>
            <p key={clubTag.id}>{clubTag.title}</p>
        </div>
    )
}

export default ClubTag
