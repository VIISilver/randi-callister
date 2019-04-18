import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import CardMedia from '@material-ui/core/CardMedia';

const firstCarouselImage = require('../../../assets/image11.jpg');

const styles = theme => ({
  root: {
    height: 180,
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
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
          <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
            <CardMedia
                  component="img"
                  image={firstCarouselImage}
                />
            </Paper>
          </Slide>
        </div>
      </div>
    );
  }
}

HomeTransformSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeTransformSlider);
