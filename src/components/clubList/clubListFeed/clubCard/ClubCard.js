import React, { Component } from 'react';
import './ClubCard.css'
import googleLogo from '../../../../assets/google-marketing-logo.svg'
import ClubTag from '../clubCard/clubTag/ClubTag'
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';

// const useStyles = makeStyles((theme) => ({
//   root: {
//       display: 'flex',
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: '5px',
//     width: '100%',
//   },
//   image: {
//     width: 128,
//     height: 128,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
// }));

export default class ClubCard extends React.Component {
//   const classes = useStyles();
    constructor(props) {
        super(props);
    }
render() {
     return (
      <div className='clubCard' key={this.props.clubCard.id}>
          <div className='clubLogo'>
              <img src={googleLogo} alt={this.props.clubCard.title} style={{width: "150px"}}/>
          </div>
          <div className='clubDetails'>
                <h3>{this.props.clubCard.title}</h3>
                <p>{this.props.clubCard.description}</p>
                
              <div className='clubTags'>
                {this.props.clubCard.tags.map((tag) => (
                    <ClubTag clubTag={tag} />
                ))}
                {/* {this.props.clubCard.tags.map((tag) => (
                    <p key={tag.id}>{tag.title}</p>
                ))} */}
              </div>
          </div>
      </div>
    // <div className={classes.root}>
    //   <Paper className={classes.paper}>
    //     <Grid container spacing={2}>
    //       <Grid item>
    //         <ButtonBase className={classes.image}>
    //           <img className={classes.img} alt="complex" src={googleLogo} />
    //         </ButtonBase>
    //       </Grid>
    //       <Grid item xs={12} sm container>
    //         <Grid item xs container direction="column" spacing={2}>
    //           <Grid item xs>
    //             <Typography gutterBottom variant="subtitle1">
    //               {clubCard.title}
    //             </Typography>
    //             <Typography variant="body2" gutterBottom>
    //               {clubCard.description}
    //             </Typography>
    //             <Typography variant="body2" color="textSecondary">
    //               ID: {clubCard.id}
    //             </Typography>
    //           </Grid>
    //           <Grid item>
    //             <Typography variant="body2" style={{ cursor: 'pointer' }}>
    //               Tags Tags Tags Tags
    //             </Typography>
    //           </Grid>
    //         </Grid>
    //         <Grid item>
    //           <Typography variant="subtitle1">Follow</Typography>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Paper>
    // </div>
  );
}}

// const ClubCard = ({clubCard}) => {
//     return (
//         <div className='clubCard'>
//             <h3>{clubCard.title}</h3>
//             <p>{clubCard.description}</p>
//         </div>
//     )
// }

// export default ClubCard
