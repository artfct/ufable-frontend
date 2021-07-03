import './Sidenavbar.css'
import ClubCategories from './clubCategories/ClubCategories'

const Sidenavbar = ({clubCategories}) => {
    return (
        <div className='sidenavbar'>
            <h3>This is side nav bar expanded</h3>
            <ClubCategories clubCategories={clubCategories}/>
        </div>
    )
}

export default Sidenavbar
