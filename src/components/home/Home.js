import React, { Component } from 'react';
import MobileTopbar from '../functional/navigation/MobileTopbar';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import ScrollTop from '../functional/buttons/ScrollTop';
import Footer from '../functional/footer/Footer';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import HomeHeader from './homecards/HomeHeader';
import ButtonBar from '../functional/buttons/ButtonBar';
import HomeShopSection from './homecards/HomeShopSection';
import HomeTransformSlider from './homecards/HomeTransformSlider';

const aboutImage = require('../../assets/image13.jpg');

const styles = () => ({
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
    width: 1000,
    marginTop: 60,

  }
})

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      iconFillColor: '#3F51B5',

      homeToAboutButtonText: 'Read More',
      homeToShopButtonText: 'Go To Shop',

      homeToAboutLinkToString: '/about',
      homeToShopLinkToString: '/shop',

      shopItemIcon: { name: 'phone' },
      shopItemTitle: 'Burn it Babe',
      shopItemText: 'Laborum quis excepteur id cillum laboris.',

      shopItemIcon1: { name: 'trash' },
      shopItemTitle1: 'Burn it Bro',
      shopItemText1: 'Ut est qui occaecat ea nulla ut.',

      shopItemIcon2: { name: 'message' },
      shopItemTitle2: 'Nutrition Only',
      shopItemText2: 'Pariatur non qui labore mollit eu consequat.',

      shopItemIcon3: { name: 'envelope' },
      shopItemTitle3: 'Challenger',
      shopItemText3: 'Pariatur non qui labore mollit eu consequat.'
    }
  }

  render() {

    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <MobileTopbar currentPath={currentPath} />
        <HomeHeader />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={5} sm={6}>
                <Typography variant="h6">
                Hey there! I'm Randi!
                </Typography>
                <Typography variant="body1" gutterBottom>
                I am a Health and fitness professional and I love every minute of it.
                </Typography>
              </Grid>
              <Grid item xs={5} sm={6}>
              <Paper>
                <CardMedia
                  component="img"
                  image={aboutImage}
                />
                </Paper>
              </Grid>
                {/* <Typography variant="body1" gutterBottom>
                   Click below to learn more about me and how I got to where I am today!
                </Typography> */}
              <ButtonBar 
              pageToPageLinkToString={this.state.homeToAboutLinkToString} 
              pageButtonText={this.state.homeToAboutButtonText} 
              />
            </Grid>
          </Grid>
                <HomeShopSection />
                <HomeTransformSlider />
          <ScrollTop />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Home);