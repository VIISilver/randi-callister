import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import './AboutCard.css';

const styles = theme => ({
  imageText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  overlaySetter: {
    position: 'absolute',
    top: '21%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
  },
})

class AboutCard extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div id="overlayContainer">
        <div className={classes.overlaySetter}>
          <CardHeader
            title={
              <Typography variant="h5" className={classes.imageText}>
                About me
            </Typography>
            }
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(AboutCard);