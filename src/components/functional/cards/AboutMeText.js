import React, { Component } from 'react';
import ButtonBar from '../buttons/ButtonBar';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 30,
    marginBottom: 27,
  },
})

class AboutMeText extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid container xs={12} className={classes.itemContainer}>
        <Grid item xs={12}>
          <Typography variant="h6" color="secondary">
          I am Randi Wolsey!
                  </Typography>
          <Typography variant="body2">
          I'm married with a darling daughter and 3 fur babies. Things I enjoy are workouts with my daughter, running with my dogs, all sorts of food, books, and the outdoors! Creating a healthy lifestyle is key so I have spent years working on perfecting the right balance for me as well as others! 
                  </Typography>
          <Typography variant="body2">
          Check out my shop to see what I have to offer and contact me if you have any questions or are ready to get started on your goals!!
                  </Typography>
                  <div className={"vert-center-item-container"}>
                  <ButtonBar 
                  pageToPageLinkToString={"/shop"}
                  pageButtonText={"Go To Shop"} />
                  </div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(AboutMeText);