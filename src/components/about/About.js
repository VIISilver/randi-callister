import React, { Component } from 'react';
import MobileTopbar from '../functional/navigation/MobileTopbar';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AboutMeText from '../functional/cards/AboutMeText.js';
import AboutMeReasons from '../functional/cards/AboutMeReasons.js';
import ScrollTop from '../functional/buttons/ScrollTop';
import Footer from '../functional/footer/Footer';
import Grid from '@material-ui/core/Grid';
import AboutHeader from './aboutcards/AboutHeader';

const styles = theme => ({

  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    padding: 20,
    paddingBottom: 60
  },
  grid: {
    width: 1000
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    height: "95vh"
  },
  subHeadBreak: {
    margin: 10,
    borderColor: '#74215a',
    width: '97%',
    display: 'block',
  }
})


class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  render() {

    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <MobileTopbar currentPath={currentPath} />
        <AboutHeader />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={24}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <AboutMeText />
              <AboutMeReasons />
              <ScrollTop />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}



export default withStyles(styles)(About);