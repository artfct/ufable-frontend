import logo from './logo.svg';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


import './App.css';
import Navbar from './components/clubList/navbar/Navbar';
import Sidenavbar from './components/clubList/sidenavbar/Sidenavbar';
import ClubListFeed from './components/clubList/clubListFeed/ClubListFeed';
import LoginPage from './components/loginPage/LoginPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Navbar />
            <Sidenavbar/>
            <ClubListFeed/>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>

        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
