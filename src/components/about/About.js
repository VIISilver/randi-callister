import React, { Component } from 'react';
import MobileTopbar from '../functional/navigation/MobileTopbar';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CardItem from '../functional/cards/CardItem';
import AboutCard from '../functional/cards/AboutCard.js';
import SectionHeader from '../functional/typo/SectionHeader';
import CardMedia from '@material-ui/core/CardMedia';
import ScrollTop from '../functional/buttons/ScrollTop';
import Footer from '../functional/footer/Footer';

const firstImage = require('../../assets/image3.jpg');
const secondImage = require('../../assets/image4.jpg');
const thirdImage = require('../../assets/image5.jpg');
const fourthImage = require('../../assets/image6.jpg');
const fifthImage = require('../../assets/image7.jpg');

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
        <CardMedia
          component="img"
          className={classes.media}
          image={firstImage}
        />
        <AboutCard />
        <CardMedia
          component="img"
          className={classes.media}
          image={secondImage}
        />
        <CardMedia
          component="img"
          className={classes.media}
          image={thirdImage}
        />
        <CardMedia
          component="img"
          className={classes.media}
          image={fourthImage}
        />
        <CardMedia
          component="img"
          className={classes.media}
          image={fifthImage}
        />
        {/* <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <CardItem />
              <Grid item xs={12} sm={6}>
                <SectionHeader title="Hey there, I'm Randi" subtitle="Esse aute nisi enim consequat dolor laboris do do id." />
              </Grid>
              <Grid item xs={12}>
                <CardMedia
                  component="img"
                  image={topImage}
                />
              </Grid>
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
            </Grid>
          </Grid>
        </div> */}
          <ScrollTop />
          <Footer />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(About);