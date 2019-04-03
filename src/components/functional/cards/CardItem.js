import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ButtonBar from '../buttons/ButtonBar';
import Grid from '@material-ui/core/Grid';
import Icon from '../../../assets/Icon';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  avatar: {
    margin: 10,
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
  },
  avatarContainer: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginBottom: theme.spacing.unit * 4
    }
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  baseline: {
    alignSelf: 'baseline',
    marginLeft: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      marginLeft: 0
    }
  },
  inline: {
    display: 'inline-block',
    marginLeft: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  inlineRight: {
    width: '30%',
    textAlign: 'right',
    marginLeft: 50,
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
      textAlign: 'center'
    }
  },
  backButton: {
    marginRight: theme.spacing.unit * 2
  }
})

class CardItem extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12} sm={6}>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <div className={classes.itemContainer}>
              <div className={classes.avatarContainer}>
                <Avatar className={classes.avatar}>
                  {/* <Icon name="wifi" fill="#3f51b5"/> */}
                  <Icon 
                  name={this.props.homePageIcon} 
                  fill={this.props.homePageIconColor} />
                </Avatar>
              </div>
              <div className={classes.baseline}>
                <div className={classes.inlineRight}>
                  <Typography variant="h4" gutterBottom>
                    {this.props.homePageCardTitle}
              </Typography>
                  <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                    {this.props.homePageCardText}
              </Typography>
                  <ButtonBar />
                </div>
              </div>
            </div>
          </Paper>
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(CardItem);