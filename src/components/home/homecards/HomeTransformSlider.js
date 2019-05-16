import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import CardMedia from '@material-ui/core/CardMedia';
import './HomeTransformSlider.css';

const firstCarouselImage = require('../../../assets/image11.jpg');

const styles = theme => ({
  root: {
    padding: 250,
    marginTop: 90,
  },
  wrapper: {
    width: 100 + theme.spacing.unit * 2,
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing.unit,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  carouselImage: {
    width: 250,
  }
});

class HomeTransformSlider extends Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.root} className={"app-border"}>
        <div className={classes.wrapper}>
          <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
            <CardMedia
                  component="img"
                  image={firstCarouselImage}
                  className={classes.carouselImage}
                />
            </Paper>
          </Slide>
          <button 
          className={"pagination-switch"}
          checked={checked} onClick={this.handleChange} aria-label="Collapse"></button>
          <button 
          className={"pagination-switch"}
          checked={checked} onClick={this.handleChange} aria-label="Collapse"></button>
        </div>
      </div>
    );
  }
}

HomeTransformSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeTransformSlider);
