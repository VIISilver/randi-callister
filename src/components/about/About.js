import React, { Component } from 'react';
import MobileTopbar from '../functional/navigation/MobileTopbar';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AboutCard from '../functional/cards/AboutCard.js';
import AboutMeText from '../functional/cards/AboutMeText.js';
import AboutMeReasons from '../functional/cards/AboutMeReasons.js';
import MyTeamAbout from '../functional/cards/MyTeamAbout.js';
import ScrollTop from '../functional/buttons/ScrollTop';
import Footer from '../functional/footer/Footer';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['A500'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    width: 1000
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    height: "95vh"
  }
})

class About extends Component {

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <MobileTopbar currentPath={currentPath} />
        <AboutCard />
        <AboutMeText />
        <AboutMeReasons />
        <Typography gutterBottom gutterTop variant="h6">
          My Team
        </Typography>
        <MyTeamAbout />
        <ScrollTop />
        <Footer />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(About);