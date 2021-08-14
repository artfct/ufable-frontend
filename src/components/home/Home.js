import React from 'react'
import Navbar from '../navBar/Navbar'
import Sidebar from '../sideBar/Sidebar'
import LoginForm from '../loginForm/LoginForm';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const Home = () => {
    return (
        <>
           {/* <Sidebar/>
           <Navbar/> */}
           <Container>
                <Grid container
                    spacing={2}
                    // direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}>
                    <Grid item xs={9}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                Welcome to UFable
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card variant ="outlined">
                            <CardContent>

                                <Typography variant="h5" component="h2" gutterBottom>
                                Login Form
                                </Typography>
                                <form>
                                    <Grid  item xs={12}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Username"
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            id="filled-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid width="100%" item xs={12} >
                                        <Button  width="100%" variant="contained" color="secondary">
                                            Login
                                        </Button>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home;
