import React, { Component } from 'react';
import MobileTopbar from '../functional/navigation/MobileTopbar';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AboutCard from '../functional/cards/AboutCard.js';
import AboutMeText from '../functional/cards/AboutMeText.js';
import AboutMeReasons from '../functional/cards/AboutMeReasons.js';
import ScrollTop from '../functional/buttons/ScrollTop';
import Footer from '../functional/footer/Footer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TeamAboutCard from './aboutcards/TeamAboutCard';

const styles = theme => ({

  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['A500'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    padding: 20,
    paddingBottom: 60
  },
  grid: {
    width: 1000
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    height: "95vh"
  }
})


class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Joe',
      description: 'Veniam id pariatur do sint Lorem.',
      name1: 'Jane',
      description1: 'Laborum quis excepteur id cillum laboris officia duis.',
      name2: 'Mav',
      description2: 'Ut est qui occaecat ea nulla ut.',
      name3: 'Fido',
      description3: 'Pariatur non qui labore mollit eu consequat.'
    }
  }

  render() {

    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <MobileTopbar currentPath={currentPath} />
        <AboutCard />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={24}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <AboutMeText />
              <AboutMeReasons />
              <Grid item xs={12}>
                <Typography variant="h6">
                  GET TO KNOW THE TEAM
                </Typography>
              </Grid>
              <TeamAboutCard
                teamMemberName={this.state.name}
                teamMemberDescription={this.state.description}
              />
              <TeamAboutCard
                teamMemberName={this.state.name1}
                teamMemberDescription={this.state.description1}
              />
              <TeamAboutCard
                teamMemberName={this.state.name2}
                teamMemberDescription={this.state.description2}
              />
              <TeamAboutCard
                teamMemberName={this.state.name3}
                teamMemberDescription={this.state.description3}
              />
              <ScrollTop />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}



export default withStyles(styles)(About);