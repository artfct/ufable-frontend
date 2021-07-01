import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';
import './ClubList.css'
import Navbar from './navbar/Navbar'
import Sidenavbar from './sidenavbar/Sidenavbar'
import MiniDrawer from './sidenavbar/MiniDrawer'
import ClubListFeed from './clubListFeed/ClubListFeed'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function ClubList() {
const classes = useStyles();
  const [clubCards, setClubCard] = useState([
    {
      id: 1,
      img: '',
      title: 'First Club',
      description: 'This is a description',
      tags: [
        {
          id: 1,
          title: 'tag1'
        },
        {
            id: 2,
            title: 'tag2'
          },
      ],
      follow: false,
    },
    {
      id: 2,
      img: '',
      title: 'Second Club',
      description: 'This is a description',
      tags: [
        {
            id: 1,
            title: 'tag1'
          },
          {
              id: 2,
              title: 'tag2'
            },
      ],
      follow: false,
    },
    {
      id: 3,
      img: '',
      title: 'Third Club',
      description: 'This is a description',
      tags: [
        {
            id: 1,
            title: 'tag1'
          },
          {
              id: 2,
              title: 'tag2'
            },
      ],
      follow: false,
    },
    {
      id: 4,
      img: '',
      title: 'Fourth Club',
      description: 'This is a description',
      tags: [
        {
            id: 1,
            title: 'tag1'
          },
          {
              id: 2,
              title: 'tag2'
            },
      ],
      follow: false,
    },
    {
      id: 5,
      img: '',
      title: 'Fifth Club',
      description: 'This is a description',
      tags: [
        {
            id: 1,
            title: 'tag1'
          },
          {
              id: 2,
              title: 'tag2'
            },
      ],
      follow: false,
    },
    {
      id: 6,
      img: '',
      title: 'Sixth Club',
      description: 'This is a description',
      tags: [
        {
            id: 1,
            title: 'tag1'
          },
          {
              id: 2,
              title: 'tag2'
            },
      ],
      follow: false,
    },
    {
        id: 7,
        img: '',
        title: 'Seventh Club',
        description: 'This is a description',
        tags: [
          {
              id: 1,
              title: 'tag1'
            },
            {
                id: 2,
                title: 'tag2'
              },
        ],
        follow: false,
      },
      {
        id: 8,
        img: '',
        title: 'Eight Club',
        description: 'This is a description',
        tags: [
          {
              id: 1,
              title: 'tag1'
            },
            {
                id: 2,
                title: 'tag2'
              },
        ],
        follow: false,
      },
      {
        id: 9,
        img: '',
        title: 'Nineth Club',
        description: 'This is a description',
        tags: [
          {
              id: 1,
              title: 'tag1'
            },
            {
                id: 2,
                title: 'tag2'
              },
        ],
        follow: false,
      },
      {
        id: 10,
        img: '',
        title: 'Tenth Club',
        description: 'This is a description',
        tags: [
          {
              id: 1,
              title: 'tag1'
            },
            {
                id: 2,
                title: 'tag2'
              },
        ],
        follow: false,
      },
  ])

    const topOfNav = document.body.getBoundingClientRect();

    const fixnav = () => {
        if(window.scrollY >= topOfNav) {
            document.body.classList.add('fixed-nav');
        } else {
            document.body.classList.remove('fixed-nav');
        }
    }

    window.addEventListener('scroll', fixnav);

    return (
    // <div className={classes.root}>
    //   <Grid container spacing = {1}>
    //     <Grid item xs={12}>
    //       <Paper className={classes.paper} >
    //         <Navbar className='clubListNavbar'/>
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
    //       <Paper className={classes.paper} elevation={0}>
    //         <Sidenavbar/>
    //         {/* <MiniDrawer /> */}
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={9} sm={7} md={6} lg={6} xl={6}>
    //       <Paper className={classes.paper} elevation={0}>
    //         <ClubListFeed clubCards={clubCards}/>
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </div>
    <div className='clubListContainer'>
        <Navbar className='clubListHeader'/>
        <div className='clubListMain'>
            <Sidenavbar />
            <ClubListFeed clubCards={clubCards}/>
            <div className='emptyDiv'>
                <p>This section will remain empty for now</p>
            </div>
        </div>
    </div>
    )
}

export default ClubList
