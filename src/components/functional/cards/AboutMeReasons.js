import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const firstImage = require('../../../assets/image3.jpg');
const secondImage = require('../../../assets/image4.jpg');

const styles = theme => ({
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  imageText: {
    color: 'white',
    position: 'absolute',
    top: 77,
  },
  positionSetter: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  textOverImage: {
    padding: 0,
    marginLeft: 20,
  }
})

class AboutMeReasons extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid container xs={12} className={classes.itemContainer}>
        <Grid item xs={12}>
          <div className={classes.positionSetter}>
            <CardMedia
              component="img"
              className={classes.media}
              image={firstImage}
            />
            <CardHeader
              className={classes.textOverImage}
              title={
                <Typography variant="h6" className={classes.imageText}>
                  My Story
                  </Typography>
              }
            //   subheader={
            //     <Typography variant="body2" className={classes.imageText}>
            //       My Story
            //       </Typography>
            //   }
            />
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(AboutMeReasons);