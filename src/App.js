import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Sidenavbar from './components/sidenavbar/Sidenavbar'
import ClubListFeed from './components/clubListFeed/ClubListFeed'



function App() {
  return (
    <div className="main">
      <Navbar />
      <Sidenavbar />
      <ClubListFeed />

    </div>
  );
}

export default App;
