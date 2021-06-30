import React from 'react'
import ReactDOM from 'react-dom'
import './SearchBar.css'
// import { FaSearch } from "react-icons/fa"

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A search was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className='searchBar'onSubmit={this.handleSubmit}>
          <input type="search" placeholder="Search" value={this.state.value} onChange={this.handleChange}/>
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <SearchBar />,
    document.getElementById('root')
  );

  export default SearchBar