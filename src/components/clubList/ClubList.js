import React from 'react';
import './ClubList.css'
import Navbar from './navbar/Navbar'
import Sidenavbar from './sidenavbar/Sidenavbar'
import ClubListFeed from './clubListFeed/ClubListFeed'
import ClubListJson from '../../tests/json/clubs.json'
import CategoryJson from '../../tests/json/categories.json'

function ClubList() {

    return (
    <div className='clubListContainer'>
        <Navbar className='clubListHeader'/>
        <div className='clubListMain'>
            <Sidenavbar clubCategories={CategoryJson}/>
            <ClubListFeed clubCards={ClubListJson}/>
            <div className='emptyDiv'>
                <p>This section will remain empty for now</p>
            </div>
        </div>
    </div>
    )
}

export default ClubList
