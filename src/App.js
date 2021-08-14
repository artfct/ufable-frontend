import logo from './logo.svg';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClubList from './components/clubList/ClubList'


import './App.css';
import Sidenavbar from './components/clubList/sidenavbar/Sidenavbar';
import ClubListFeed from './components/clubList/clubListFeed/ClubListFeed';
import LoginPage from './components/loginForm/LoginForm';
import LandingPage from './components/landingPage/LandingPage';
import Home from './components/home/Home'

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
            <Home/>
          </Route>

        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
