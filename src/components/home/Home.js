import React, { Component } from 'react';
import MobileTopbar from '../functional/navigation/MobileTopbar';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CardItem from '../functional/cards/CardItem';
import CardMedia from '@material-ui/core/CardMedia';
import ScrollTop from '../functional/buttons/ScrollTop';
import Footer from '../functional/footer/Footer';
import Typography from '@material-ui/core/Typography';
import HomeHeader from './homecards/HomeHeader';

const aboutImage = require('../../assets/image14.jpg');

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
    width: 1000
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

      // aboutIcon: { name: 'wifi' },
      // aboutCardTitle: 'About Me',
      // aboutCardText: 'Learn about what it is that got me into fitness as well as my crazy team I work with every day!',

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
              {/* <CardItem
                homePageIcon={this.state.aboutIcon.name}
                homePageIconColor={this.state.iconFillColor}
                homePageCardTitle={this.state.aboutCardTitle}
                homePageCardText={this.state.aboutCardText}
                homeButtonText={this.state.homeToAboutButtonText}
                homeToPageLinkToString={this.state.homeToAboutLinkToString}
              /> */}
              <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
              Hey there, I'm Randi
        </Typography>
        <Typography variant="body2" gutterBottom>
        Esse aute nisi enim consequat dolor laboris do do id.
        </Typography>
              </Grid>
              <Grid item xs={12}>
                <CardMedia
                  component="img"
                  image={aboutImage}
                />
              </Grid>
              <CardItem
                homePageIcon={this.state.shopItemIcon.name}
                homePageIconColor={this.state.iconFillColor}
                homePageCardTitle={this.state.shopItemTitle}
                homePageCardText={this.state.shopItemText}
                homeButtonText={this.state.homeToShopButtonText}
                homeToPageLinkToString={this.state.homeToShopLinkToString}
              />
              <CardItem
                homePageIcon={this.state.shopItemIcon1.name}
                homePageIconColor={this.state.iconFillColor}
                homePageCardTitle={this.state.shopItemTitle1}
                homePageCardText={this.state.shopItemText1}
                homeButtonText={this.state.homeToShopButtonText}
                homeToPageLinkToString={this.state.homeToShopLinkToString}
              />
              <CardItem
                homePageIcon={this.state.shopItemIcon2.name}
                homePageIconColor={this.state.iconFillColor}
                homePageCardTitle={this.state.shopItemTitle2}
                homePageCardText={this.state.shopItemText2}
                homeButtonText={this.state.homeToShopButtonText}
                homeToPageLinkToString={this.state.homeToShopLinkToString}
              />
              <CardItem
                homePageIcon={this.state.shopItemIcon3.name}
                homePageIconColor={this.state.iconFillColor}
                homePageCardTitle={this.state.shopItemTitle3}
                homePageCardText={this.state.shopItemText3}
                homeButtonText={this.state.homeToShopButtonText}
                homeToPageLinkToString={this.state.homeToShopLinkToString}
              />
            </Grid>
          </Grid>
          <ScrollTop />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Home);