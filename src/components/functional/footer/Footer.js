import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';

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
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <Typography variant="h6" color="inherit" noWrap>
          <img width={24} src={logo} />
          <span className={classes.tagline}>Developed by Strength LLC</span>
        </Typography>
          <a href="https://facebook.com" target="_blank"><img width={24} height={24} src={facebook} /></a>
          <a href="https://twitter.com" target="_blank"><img width={24} height={24} src={twitter} /></a>
          <a href="https://instagram.com" target="_blank"><img width={24} height={24} src={instagram} /></a>
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);