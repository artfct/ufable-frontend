import React from 'react'
import './ClubCategories.css'
import ClubCategory from './ClubCategory'

const ClubCategories = ({clubCategories, selectedCategories, onChange}) => {

    const handleTagClicked = (selectedCategoryId) => {
        // is currently selected
        if(selectedCategories[selectedCategoryId]) {
            // remove selected key from options list
            delete selectedCategories[selectedCategoryId];
        } else { // is not currently selected
            // Add selected key to options list
            selectedCategories[selectedCategoryId] ={};
        }
        // Call onChange function given by parent
        onChange(selectedCategories);
    }

    const handleChildCategoriesChange = (categoryId, childCategories) => {
        // Add sub selections to current categoryId
        selectedCategories[categoryId] = childCategories;
        onChange(selectedCategories);
    }

    return (
        <div className="clubCategoriesContainer">
            {clubCategories.map((category) => (
                <div>
                <ClubCategory
                    key={category.id}
                    selectedCategory={selectedCategories[category.id]}
                    category={category}
                    onChange={() => {handleTagClicked(category.id)}}
                />
                {
                    (category.child.length > 0 && selectedCategories[category.id]) &&
                    <ClubCategories
                        key={category.id}
                        clubCategories={category.child}
                        selectedCategories={selectedCategories[category.id]}
                        onChange={(childCategories) => {handleChildCategoriesChange(category.id, childCategories)}}
                    />
                }
                </div>                
            ))}
        </div>
    )
}

export default ClubCategories
