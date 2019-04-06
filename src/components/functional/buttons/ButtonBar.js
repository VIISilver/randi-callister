import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  primary: {
    marginRight: theme.spacing.unit * 2
  },
  secondary: {
    background: theme.palette.secondary['100'],
    color: 'white'
  },
  spaceTop: {
    marginTop: 20
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
})

class ButtonBar extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.spaceTop}>
        <Link to={this.props.pageToPageLinkToString} className={classes.link}>
          <Button
            variant="contained"
            color="primary"
            className={classes.secondary}
          >
          {this.props.pageButtonText}
        </Button>
        </Link>
      </div>
    )
  }
}

export default withStyles(styles)(ButtonBar);