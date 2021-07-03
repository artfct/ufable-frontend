import React, { useState } from 'react'
import './ClubCategory.css'

const ClubCategory = ({selectedCategory, category, onChange}) => {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="clubTagContainerParent">
            <div className={`clubTagContainer${isActive ? "Show" : ""}`} onClick={handleToggle}>
                <p className="clubTag" id="clubTagCategory" onClick={() => onChange(!selectedCategory)}>{category.category}</p>
                <p id={category.id}>This is a test</p>
            </div>
        </div>
        // <div className="clubTagContainer">
        //     <p className="clubTag" id="clubTagCategory" onClick={handleToggle}>{category.category}</p>
        //     <div className={`childTag${isActive ? "Show" : ""}`}><p>This is hidden tag looooooooool</p></div>
        // </div>

        // https://www.olioapps.com/blog/react-recursion/
        // <div className="clubTagContainer">
        //     <p className="clubTag" id="clubTagCategory" onClick={handleToggle}>{category.category}</p>
        //     {hasChildren && category.child.map((child) => (
        //         <ClubCategory className={`childTag${isActive ? "Show" : ""}`} key={child.id} category={category} {...child}/>
        //     ))}
        // </div>
    )
}

export default ClubCategory
