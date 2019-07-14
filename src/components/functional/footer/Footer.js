import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';

// const logo = require('../../../assets/Logo-FINAL-Personal-Trainer.png');
const logo = require('../../../assets/Logo-FINAL-Personal-Trainer.svg');
// const facebook = require('../../../assets/social-facebook-box-blue-icon.png');
// const twitter = require('../../../assets/social-twitter.png');
const instagram = require('../../../assets/social-instagram.png');

const styles = theme => ({
  root: {
    backgroundColor: '#b2b9e1',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    direction: 'column',
    paddingTop: 7,
    paddingBottom: 10,
  },
  tagline: {
    marginLeft: 10,
    color: 'white',
  },
  socialBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 9,
  },
  socialImages: {
    width: 24,
    height: 24,
    marginLeft: 3,
  },
  grid: {
    width: 970,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    marginLeft: 13,
  },
  customFooterSize: {
    fontSize: 14,
  },
  fixedIfShorterThanWindow: {
    position: 'fixed',
    bottom: 0,
  }
})

class Footer extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid container 
      className={classnames(classes.root, {
        [classes.fixedIfShorterThanWindow]: this.props.bottomNavFixedIfShorter,
      })}
      >
        <Grid container className={classes.grid}>
          <Grid item xs={9} className={classes.footerText}>
            <Typography color="inherit" className={classes.customFooterSize}>
              <img width={24} src={logo} alt="Randi Callister Running Woman Logo" />
              <span className={classes.tagline}>Developed by Jared Parker</span>
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.socialBar}>
            <a href="https://www.instagram.com/a_betterfit/"><img className={classes.socialImages} src={instagram} alt="Instagram Logo" /></a>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);