import React from 'react'
import './ClubCard.css'
import googleLogo from '../../../../assets/google-marketing-logo.svg'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    margin: '5px',
    width: '100%',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ClubCard({clubCard}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={googleLogo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {clubCard.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {clubCard.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {clubCard.id}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Tags Tags Tags Tags
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Follow</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

// const ClubCard = ({clubCard}) => {
//     return (
//         <div className='clubCard'>
//             <h3>{clubCard.title}</h3>
//             <p>{clubCard.description}</p>
//         </div>
//     )
// }

// export default ClubCard
