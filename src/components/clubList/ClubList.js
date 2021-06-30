import Navbar from './navbar/Navbar'
import Sidenavbar from './sidenavbar/Sidenavbar'
import ClubListFeed from './clubListFeed/ClubListFeed'

const ClubList = () => {
    return (
        <div className='clubList'>
            <Navbar />
            <Sidenavbar />
            <ClubListFeed/>
        </div>
    )
}

export default ClubList
