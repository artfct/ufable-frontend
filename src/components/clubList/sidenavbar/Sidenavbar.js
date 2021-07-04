import React from 'react'
import './Sidenavbar.css'
import ClubCategories from './clubCategories/ClubCategories'

export default class Sidenavbar extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        selectedCategories: {}
    }
render() {
    return (
        <div className='sidenavbar'>
            <h3>This is side nav bar expanded</h3>
            <ClubCategories
                clubCategories={this.props.clubCategories}
                onChange={(selectedCategories) => this.setState({selectedCategories})}
                selectedCategories={this.state.selectedCategories}
            />
        </div>
        )
    }
}
