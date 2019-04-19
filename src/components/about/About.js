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
import AboutHeader from './aboutcards/AboutHeader';

const firstImage = require('../../assets/image8.jpg');
const secondImage = require('../../assets/image12.jpg');
const thirdImage = require('../../assets/image9.jpg');
const fourthImage = require('../../assets/image14.jpg');

const styles = theme => ({

  root: {
    flexGrow: 1,
    backgroundColor: 'white',
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
  },
  subHeadBreak: {
    margin: 10,
    borderColor: '#74215a',
    width: '97%',
    display: 'block',
  }
})


class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Joe',
      description: 'Veniam id pariatur do sint Lorem.',
      image: firstImage,
      name1: 'Jane',
      description1: 'Laborum quis excepteur id cillum laboris.',
      image1: secondImage,
      name2: 'Mav',
      description2: 'Ut est qui occaecat ea nulla ut.',
      image2: thirdImage,
      name3: 'Fido',
      description3: 'Pariatur non qui labore mollit eu consequat.',
      image3: fourthImage
    }
  }

  render() {

    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <MobileTopbar currentPath={currentPath} />
        <AboutHeader />
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
          <hr className={classes.subHeadBreak} />
                <Typography variant="h6" align="center">
                  GET TO KNOW THE TEAM
                </Typography>
          <hr className={classes.subHeadBreak} />
              </Grid>
              <TeamAboutCard
                teamMemberName={this.state.name}
                teamMemberDescription={this.state.description}
                teamMemberImage={this.state.image}
              />
              <TeamAboutCard
                teamMemberName={this.state.name1}
                teamMemberDescription={this.state.description1}
                teamMemberImage={this.state.image1}
              />
              <TeamAboutCard
                teamMemberName={this.state.name2}
                teamMemberDescription={this.state.description2}
                teamMemberImage={this.state.image2}
              />
              <TeamAboutCard
                teamMemberName={this.state.name3}
                teamMemberDescription={this.state.description3}
                teamMemberImage={this.state.image3}
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