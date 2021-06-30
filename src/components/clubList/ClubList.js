import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';
import './ClubList.css'
import Navbar from './navbar/Navbar'
import Sidenavbar from './sidenavbar/Sidenavbar'
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

const ClubList = () => {
    const classes = useStyles();
  const [clubCards, setClubCard] = useState([
    {
      id: 1,
      img: '',
      title: 'First Club',
      description: 'This is a description',
      tags: [],
      follow: false,
    },
    {
      id: 2,
      img: '',
      title: 'Second Club',
      description: 'This is a description',
      tags: [],
      follow: false,
    },
    {
      id: 3,
      img: '',
      title: 'Third Club',
      description: 'This is a description',
      tags: [],
      follow: false,
    },
    {
      id: 4,
      img: '',
      title: 'Fourth Club',
      description: 'This is a description',
      tags: [],
      follow: false,
    },
    {
      id: 5,
      img: '',
      title: 'Fifth Club',
      description: 'This is a description',
      tags: [],
      follow: false,
    },
    {
      id: 6,
      img: '',
      title: 'Sixth Club',
      description: 'This is a description',
      tags: [],
      follow: false,
    },
  ])

    return (
    <div className={classes.root}>
      <Grid container spacing = {1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Navbar/>
          </Paper>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
          <Paper className={classes.paper}>
            <Sidenavbar/>
          </Paper>
        </Grid>
        <Grid item xs={9} sm={7} md={6} lg={6} xl={6}>
          <Paper className={classes.paper}>
            <ClubListFeed clubCards={clubCards}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
    )
}

export default ClubList
