import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import CardMedia from '@material-ui/core/CardMedia';
import './HomeTransformSlider.css';
import { Typography } from '@material-ui/core';

const firstCarouselImage = require('../../../assets/client2-transformation.JPG');
const secondCarouselImage = require('../../../assets/client1-transformation-v2.jpg');
// const firstCarouselImage = require('../../../assets/image8.jpg');
// const secondCarouselImage = require('../../../assets/image8.jpg');

const styles = theme => ({
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing.unit * 2,
  },
  carouselImage: {
    height: 204,
    width: 250,
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing.unit * 2,
  },
  transitionHeader: {
    padding: theme.spacing.unit * 2,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  }
});

class HomeTransformSlider extends Component {
  state = {
    firstChecked: true,
    activationForButtons: true,
    secondChecked: false,
  };

  handleChange = () => {
    this.setState(state => ({ firstChecked: !state.firstChecked }));
    this.setState(state => ({ secondChecked: !state.secondChecked }));
    this.setState(state => ({ activationForButtons: !state.activationForButtons }));
  };

  render() {
    const { classes } = this.props;
    const { firstChecked, secondChecked, activationForButtons } = this.state;

    return (
      <Grid xs={12} sm={12}>
        <Paper elevation={5} className={classnames(classes.paper, classes.transitionHeader)}>
          <Typography variant="h5" align='center'>
            Transformations
        </Typography>
          <Typography variant="body1" align='center'>
            Ready to add yours?
        </Typography>
        </Paper>
        <div className={classes.itemContainer}>
        <Slide direction="right" in={firstChecked} mountOnEnter unmountOnExit
          timeout={{ appear: 0, enter: 700, exit: 0 }}>
            <CardMedia
              component="img"
              image={firstCarouselImage}
              className={classnames(classes.carouselImage, "transform-carousel-img-shadow")}
            />
        </Slide>
        <Slide direction="right" in={secondChecked} mountOnEnter unmountOnExit
          timeout={{ enter: 700, exit: 0 }}>
            <CardMedia
              component="img"
              image={secondCarouselImage}
              className={classnames(classes.carouselImage, "transform-carousel-img-shadow")}
            />
        </Slide>
        </div>
        <div className={classes.itemContainer}>
          <button
            className="pagination-switch"
            style={activationForButtons ? {backgroundColor: '#000000'} :  {backgroundColor: '#FFFFFF'}}
            checked={firstChecked} onClick={this.handleChange} aria-label="Collapse"></button>
          <button
            className="pagination-switch"
            checked={secondChecked} 
            onClick={this.handleChange} 
            style={!activationForButtons ? {backgroundColor: '#000000'} :  {backgroundColor: '#FFFFFF'}}
            aria-label="Collapse"></button>
        </div>
      </Grid>
    );
  }
}

HomeTransformSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeTransformSlider);
