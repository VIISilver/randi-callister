import React, { Component } from 'react';
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
  },
})

class AboutMeText extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid container xs={12} className={classes.itemContainer}>
        <Grid item xs={12}>
          <Typography variant="h6">
            Hey there, I'm Randi Callister!
                  </Typography>
          <Typography variant="body2">
            Et nisi eiusmod incididunt labore excepteur id fugiat esse. Sit id labore Lorem consectetur enim. Esse cupidatat enim quis sint pariatur est dolore cupidatat consectetur.
                  </Typography>
          <Typography variant="body2">
            Incididunt exercitation Lorem velit elit sit occaecat dolor irure Lorem id. Est aliquip ullamco laboris cillum eiusmod ullamco excepteur deserunt. Consequat anim et eiusmod mollit qui excepteur est culpa minim minim pariatur pariatur culpa pariatur. Nulla proident esse reprehenderit pariatur ullamco cupidatat duis nulla id occaecat. Velit quis non tempor officia.
                  </Typography>
          <Typography variant="body2">
            Commodo sunt nostrud cillum eu et. Laboris sint do minim duis culpa anim consectetur. Laborum irure pariatur consectetur in. Quis excepteur aliqua sit id culpa sint. Exercitation enim ullamco amet occaecat duis ipsum aliqua nulla exercitation esse dolore tempor ex nulla. Eu tempor reprehenderit eiusmod id occaecat ex do. Culpa id ex eiusmod anim quis in cupidatat fugiat.
                  </Typography>
          <Typography variant="body2">
            Culpa incididunt velit voluptate officia et velit. Deserunt excepteur incididunt et dolor esse Lorem veniam officia dolore ut voluptate elit est. Laborum non enim minim nisi laborum culpa consequat labore nulla adipisicing adipisicing. Eu do irure elit eu. Cillum consectetur sit commodo elit enim irure deserunt adipisicing ad amet fugiat dolore voluptate fugiat.
                  </Typography>
          <Typography variant="body2">
            Consequat laboris consectetur quis minim et enim nostrud et eu aute ea tempor ea voluptate. Consectetur nostrud ex minim consequat esse ex pariatur duis reprehenderit minim amet. Lorem ex pariatur est ullamco.
                  </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(AboutMeText);