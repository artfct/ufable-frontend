import React, { useState } from 'react'
import './ClubCategory.css'

const ClubCategory = ({category}) => {
    const [isActive, setActive] = useState(false);
    const hasChildren = category.child;

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="clubTagContainer">
            <p className="clubTag" id="clubTagCategory" onClick={handleToggle}>{category.category}</p>
            <div className={`childTag${isActive ? "Show" : ""}`}><p>This is hidden tag looooooooool</p></div>
        </div>
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
