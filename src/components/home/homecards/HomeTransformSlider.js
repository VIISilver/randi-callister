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

const styles = theme => ({
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing.unit * 2,
  },
  carouselImage: {
    height: 300,
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
      <Grid xs={12}>
        <Paper elevation={5} className={classnames(classes.paper, classes.transitionHeader)}>
          <Typography variant="h5" align='center'>
            Transformations
        </Typography>
          <Typography variant="body1" align='center'>
            Ready to add yours?
        </Typography>
        </Paper>
        <Slide direction="right" in={firstChecked} mountOnEnter unmountOnExit
          timeout={{ appear: 0, enter: 700, exit: 0 }}>
          <Paper elevation={4} className={classes.paper}>
            <CardMedia
              component="img"
              image={firstCarouselImage}
              className={classes.carouselImage}
            />
          </Paper>
        </Slide>
        <Slide direction="right" in={secondChecked} mountOnEnter unmountOnExit
          timeout={{ enter: 700, exit: 0 }}>
          <Paper elevation={4} className={classes.paper}>
            <CardMedia
              component="img"
              image={secondCarouselImage}
              className={classes.carouselImage}
            />
          </Paper>
        </Slide>
        <div className={classes.itemContainer}>
          <button
            className={classnames(
              "pagination-switch",
              {["pag-switch-background"]: activationForButtons}
              )}
            checked={firstChecked} onClick={this.handleChange} aria-label="Collapse"></button>
          <button
            className={classnames(
              "pagination-switch",
              {["pag-switch-background"]: !activationForButtons}
              )}
            checked={secondChecked} onClick={this.handleChange} aria-label="Collapse"></button>
        </div>
      </Grid>
    );
  }
}

HomeTransformSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeTransformSlider);
