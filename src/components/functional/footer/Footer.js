import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Footer.css';

const logo = require('../../../assets/exercise.png');

const styles = theme => ({
  footer: {
    container: true,
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
    item: true,
    direction: 'column',
    alignItems: 'center',
    alignContent: 'center',
  }
})

class Footer extends Component {
  render() {

    const { classes } = this.props;

    return (
      <BottomNavigation>
        <Grid container>
          <Grid className={classes.footer} xs={6}>
                    <Typography variant="h6" color="inherit" noWrap>
            <img width={24} src={logo} />
            </Typography>
          </Grid>
          <Grid className={classes.footer} xs={6}>
            <p>Developed by Strength LLC</p>
          </Grid>
        </Grid>
      </BottomNavigation>
    )
  }
}

export default withStyles(styles)(Footer);
