import React from 'react';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  Link: {
    color: '#fff',
    padding: '0 10px',
  },
  Toolbar: {
    justifyContent: 'space-between',
  },
  Button: {
    background: 'lightblue',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <AppBar position='static'>
        <Container>
          <Toolbar className={classes.Toolbar}>
            <Typography variant='h6'>
              <Link href='#' underline='none' className={classes.Link}>
                Home
              </Link>
              <Link href='#' underline='none' className={classes.Link}>
                Statistics
              </Link>
              <Link href='#' underline='none' className={classes.Link}>
                Admin
              </Link>
            </Typography>
            <Button variant='contained' className={classes.Button}>
              SignUp
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
