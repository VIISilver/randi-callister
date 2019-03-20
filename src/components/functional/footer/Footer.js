import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const logo = require('../../../assets/exercise.png');
const facebook = require('../../../assets/social-facebook-box-blue-icon.png');
const twitter = require('../../../assets/social-twitter.png');
const instagram = require('../../../assets/social-instagram.png');

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.grey['200'],
  },
  logo: {
    marginTop: 13,
  },
  tagline: {
    display: 'inline-block',
    marginLeft: 10
  },
})

class Footer extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Grid container xs={12} justify="space-between" alignItems="center" direction="column" className={classes.root}>
          <Grid item xs={6}>
            <Typography variant="h6" color="inherit" noWrap>
              <img width={24} src={logo} />
              <span className={classes.tagline}>Developed by Strength LLC</span>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <a href="https://facebook.com" target="_blank"><img width={24} height={24} src={facebook} /></a>
            <a href="https://twitter.com" target="_blank"><img width={24} height={24} src={twitter} /></a>
            <a href="https://instagram.com" target="_blank"><img width={24} height={24} src={instagram} /></a>
          </Grid>
        </Grid>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);