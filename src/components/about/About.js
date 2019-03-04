import React, { Component } from 'react';
import MobileTopbar from '../functional/navigation/MobileTopbar';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CardItem from '../functional/cards/CardItem';
import SectionHeader from '../functional/typo/SectionHeader';
import CardMedia from '@material-ui/core/CardMedia';

const topImage = require('../../assets/image3.jpg');
const backgroundShape = require('../../assets/shape.svg');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['A500'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
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
    height: 1000
  }
})

class About extends Component {

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname

    return (
      <React.Fragment>
        <CssBaseline />
        <MobileTopbar currentPath={currentPath} />
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={topImage}
                />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>
                <CardItem />
                <SectionHeader title="Hey there, I'm Randi" subtitle="Esse aute nisi enim consequat dolor laboris do do id." />
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={topImage}
                />
                <CardItem />
                <CardItem />
                <CardItem />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(About);