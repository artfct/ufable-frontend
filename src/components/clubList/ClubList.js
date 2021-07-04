import React from 'react';
import './ClubList.css'
import Navbar from './navbar/Navbar'
import Sidenavbar from './sidenavbar/Sidenavbar'
import ClubListFeed from './clubListFeed/ClubListFeed'
import ClubListJson from '../../tests/json/clubs.json'
import CategoryJson from '../../tests/json/categories.json'
import JSONMOCKDATA from '../../tests/json/MOCK_DATA.json'

import { useState } from 'react';

function ClubList() {
    const [searchTerm, setSearchTerm] = useState('')
    const getSearchValue = (event) => {
        setSearchTerm(event.target.value);
    }
    const filterSearchData = (clubs) => {
        return clubs.filter((club) => 
            club.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            club.description.toLowerCase().includes(searchTerm.toLowerCase())
            // || club.tags.map((tag) => tag.title.toLowerCase().includes(searchTerm.toLowerCase()))

            // || club.tags.filter((tag) => tag.title.toLowerCase().includes(searchTerm.toLowerCase()))
            
            // if (searchTerm == "") {
            //     return club
            // } else if (club.category.toLowerCase().includes(searchTerm.toLowerCase())) {
            //     return club
            // }

            //  else if (val.description.toLowerCase().includes(searchTerm.toLowerCase())) {
            //     return val
            // }
        )
    }

    return (
    <div className='clubListContainer'>
        <Navbar className='clubListHeader' onSearchChange={getSearchValue}/>
        <div className='clubListMain'>
            <Sidenavbar clubCategories={CategoryJson}/>
            {/* <ClubListFeed clubCards={ClubListJson}/> */}
            <ClubListFeed clubCards={filterSearchData(ClubListJson)}/>
            <div className='emptyDiv'>
                <p>This section will remain empty for now</p>
            </div>
        </div>
    </div>
    )
}

export default ClubList
