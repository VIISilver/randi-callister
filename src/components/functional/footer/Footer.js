import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const logo = require('../../../assets/exercise.png');

const styles = theme => ({
    footer: {
        position: 'relative',
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.grey['100']}`,
        backgroundColor: 'white',
        
      },
})

class Footer extends Component {
  render() {
    return (
        <Grid position="absolute" color="default">
            <img width={24} src={logo} />
        </Grid>
    )
  }
}

export default withStyles(styles)(Footer);
