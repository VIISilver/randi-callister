import React, { Component } from 'react';
import MobileTopbar from '../functional/navigation/MobileTopbar';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CardItem from '../functional/cards/CardItem';
import SectionHeader from '../functional/typo/SectionHeader';
import CardMedia from '@material-ui/core/CardMedia';
import ScrollTop from '../functional/buttons/ScrollTop';
import Footer from '../functional/footer/Footer';

const topImage = require('../../assets/image2.jpg');
const aboutImage = require('../../assets/image14.jpg');

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

      aboutIcon: { name: 'wifi' },
      aboutCardTitle: 'About Me',
      aboutCardText: 'Learn about what it is that got me into fitness as well as my crazy team I work with every day!',

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
        <CardMedia
          component="img"
          className={classes.media}
          image={topImage}
        />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <CardItem
                homePageIcon={this.state.aboutIcon.name}
                homePageIconColor={this.state.iconFillColor}
                homePageCardTitle={this.state.aboutCardTitle}
                homePageCardText={this.state.aboutCardText}
                homeButtonText={this.state.homeToAboutButtonText}
                homeToPageLinkToString={this.state.homeToAboutLinkToString}
              />
              <Grid item xs={12} sm={6}>
                <SectionHeader title="Hey there, I'm Randi" subtitle="Esse aute nisi enim consequat dolor laboris do do id." />
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