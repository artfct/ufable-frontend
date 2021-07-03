import React from 'react'
import './ClubCategories.css'
import ClubCategory from './ClubCategory'

const ClubCategories = ({clubCategories}) => {
    return (
        <div className="clubCategoriesContainer">
            {clubCategories.map((category) => (
                <ClubCategory key={category.id} category={category}/>
            ))}
        </div>
    )
}

export default ClubCategories
