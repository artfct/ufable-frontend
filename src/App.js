import logo from './logo.svg';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClubList from './components/clubList/ClubList'


import './App.css';
//import Navbar from './components/clubList/navbar/Navbar';
import Sidenavbar from './components/clubList/sidenavbar/Sidenavbar';
import ClubListFeed from './components/clubList/clubListFeed/ClubListFeed';
import LoginPage from './components/loginPage/LoginPage';
import LandingPage from './components/landingPage/LandingPage';
import Navbar from './components/navBar/Navbar';
import Sidebar from './components/sideBar/Sidebar';

function App() {
  return (

    <>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <ClubList/>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/">
            <Sidebar/>
            <Navbar/>
            <LandingPage/>
          </Route>

        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
