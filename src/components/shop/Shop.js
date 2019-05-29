import React, { Component } from 'react';
import MobileTopbar from '../functional/navigation/MobileTopbar';
import Footer from '../functional/footer/Footer';
import ScrollTop from '../functional/buttons/ScrollTop';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ShopItemCard from './shopComponents/ShopItemCard';

const burnItImage = require("../../assets/Women's-Summer-Weight-Loss.jpg");
const burnItBroImage = require('../../assets/Weekly-Personalized-Training.jpg');
const nutrientImage = require('../../assets/The-Ultimate-Nutrition-Guide.jpg');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    // background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    padding: 20,
    paddingBottom: 72,
    paddingTop: 40,
  },
  grid: {
    width: 1000,
    padding: 10
  },
  shopTopHeader: {
    backgroundColor: '#b2b9e1',
    width: '100%',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  shopTopHeaderText: {
    color: 'white',
  },
  subHeadBreak: {
    margin: 10,
    borderColor: '#74215a',
    width: '87%',
    display: 'block',
  }
})

class Shop extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shopCardWomanTitle: 'Women’s summer weight loss challenge:',
      shopCardWomanImage: burnItImage,
      shopWomanVisibleSubText: '',
      shopWomanNonVisibleSubText1: 'Have you ever told yourself that weight loss and getting fit our seasonal? Do you feel like it if you haven’t reached your goals by the start of summer it’s too late? I have created this 8 week long challenge to help you break through this myth and see that a healthier you is possible anytime of the year. This Challenge begins June 3 and cost is only $30 for a full eight week workout plan, nutrition guidance and healthy life style tips. Save 20% with early registration by May 31st!',
      shopWomanNonVisibleSubText2: '',
      shopWomanNonVisibleSubText3: '',
      shopWomanNonVisibleSubText4: '',

      shopCardManTitle: 'Weekly personalized training:',
      shopCardManImage: burnItBroImage,
      shopManVisibleSubText: '',
      shopManNonVisibleSubText1: 'After a one on one online consultation, I will provide for you a personalized week by week fitness plan designed specifically to meet your individual needs and goals!',
      shopManNonVisibleSubText2: '',
      shopManNonVisibleSubText3: '',
      shopManNonVisibleSubText4: '',

      shopCardNutrientTitle: 'The Ultimate Nutrition Guide:',
      shopCardNutrientImage: nutrientImage,
      shopNutrientVisibleSubText: '',
      shopNutrientNonVisibleSubText1: '(Coming soon)',
      shopNutrientNonVisibleSubText2: 'This nutrition guide is packed full of educational nutrition information, comprehensive meal plans complete with shopping lists and easy to follow recipes!',
      shopNutrientNonVisibleSubText3: '',
      shopNutrientNonVisibleSubText4: '',
    }
  }

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname

    return (
      <React.Fragment>
        <CssBaseline />
        <MobileTopbar currentPath={currentPath} />
        <div className={classes.shopTopHeader}>
          <Typography variant="h3" className={classes.shopTopHeaderText}>
            Shop
          </Typography>
        </div>
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
          <hr className={classes.subHeadBreak} />
          <Typography variant="h5">
            Programs
          </Typography>
          <hr className={classes.subHeadBreak} />
              <ShopItemCard
                pageCardHeaderTitle={this.state.shopCardWomanTitle}
                pageCardImage={this.state.shopCardWomanImage}
                pageVisibleSubText={this.state.shopWomanVisibleSubText}
                pageNonVisible1={this.state.shopWomanNonVisibleSubText1}
                pageNonVisible2={this.state.shopWomanNonVisibleSubText2}
                pageNonVisible3={this.state.shopWomanNonVisibleSubText3}
                pageNonVisible4={this.state.shopWomanNonVisibleSubText4}
              />
              <ShopItemCard
                pageCardHeaderTitle={this.state.shopCardManTitle}
                pageCardImage={this.state.shopCardManImage}
                pageVisibleSubText={this.state.shopManVisibleSubText}
                pageNonVisible1={this.state.shopManNonVisibleSubText1}
                pageNonVisible2={this.state.shopManNonVisibleSubText2}
                pageNonVisible3={this.state.shopManNonVisibleSubText3}
                pageNonVisible4={this.state.shopManNonVisibleSubText4}
              />
              <ShopItemCard
                pageCardHeaderTitle={this.state.shopCardNutrientTitle}
                pageCardImage={this.state.shopCardNutrientImage}
                pageVisibleSubText={this.state.shopNutrientVisibleSubText}
                pageNonVisible1={this.state.shopNutrientNonVisibleSubText1}
                pageNonVisible2={this.state.shopNutrientNonVisibleSubText2}
                pageNonVisible3={this.state.shopNutrientNonVisibleSubText3}
                pageNonVisible4={this.state.shopNutrientNonVisibleSubText4}
              />
              {/* <ShopItemCard
                pageCardHeaderTitle={this.state.shopCardNutrientTitle}
                pageCardImage={this.state.shopCardNutrientImage}
                pageVisibleSubText={this.state.shopNutrientVisibleSubText}
                pageNonVisible1={this.state.shopNutrientNonVisibleSubText1}
                pageNonVisible2={this.state.shopNutrientNonVisibleSubText2}
                pageNonVisible3={this.state.shopNutrientNonVisibleSubText3}
                pageNonVisible4={this.state.shopNutrientNonVisibleSubText4}
              /> */}
              {/* <hr className={classes.subHeadBreak} />
              <Typography variant="h3">
                Challenges
              </Typography>
              <hr className={classes.subHeadBreak} /> */}
              <ScrollTop />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Shop);