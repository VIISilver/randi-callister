import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

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

class AboutCard extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid container xs={12} className={classes.itemContainer}>
        <Grid item xs={12}>
          <div className={classes.positionSetter}>
            
          </div>
          <div className={classes.positionSetter}>
            <CardMedia
              component="img"
              className={classes.media}
              image={secondImage}
            />
            <CardHeader
              className={classes.textOverImage}
              title={
                <Typography variant="h3" className={classes.imageText}>
                  About me
                  </Typography>
              }
            />
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(AboutCard);