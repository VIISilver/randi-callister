import React, { Component } from 'react';
import MobileTopbar from '../functional/navigation/MobileTopbar';
import Footer from '../functional/footer/Footer';
import ScrollTop from '../functional/buttons/ScrollTop';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ShopItemCard from './shopComponents/ShopItemCard';

const burnItImage = require('../../assets/shop/burnit-300x300.png');
const burnItBroImage = require('../../assets/shop/burnitdude-300x300.png');
const nutrientImage = require('../../assets/shop/nutritionalonly-300x300.png');

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
    width: 1000
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
      shopCardWomanTitle: 'Burn It Babe',
      shopCardWomanImage: burnItImage,
      shopWomanVisibleSubText: 'Excepteur magna laboris do commodo quis dolore consectetur elit occaecat aliquip.',
      shopWomanNonVisibleSubText1: 'Deets:',
      shopWomanNonVisibleSubText2: 'In reprehenderit magna esse aliquip aute ex anim enim.',
      shopWomanNonVisibleSubText3: 'Labore est magna ipsum enim fugiat esse. Qui enim tempor reprehenderit do dolore nisi ea sint. Ut eiusmod amet dolore deserunt sunt laborum aute labore ea minim est laboris ut.',
      shopWomanNonVisibleSubText4: 'Cillum minim sint quis laborum non magna sint.',

      shopCardManTitle: 'Burn It Bro',
      shopCardManImage: burnItBroImage,
      shopManVisibleSubText: 'Ipsum deserunt deserunt non sint in qui exercitation pariatur excepteur.',
      shopManNonVisibleSubText1: 'Details:',
      shopManNonVisibleSubText2: 'Laboris sint eiusmod laborum proident.',
      shopManNonVisibleSubText3: 'Labore aliquip aute sint dolore. Ullamco irure laborum ullamco elit Lorem esse aute adipisicing minim ea sunt ullamco. Magna et dolore et quis eiusmod labore aliqua. Ut dolore do est veniam et.',
      shopManNonVisibleSubText4: 'Mollit culpa sunt consequat qui. Aute consectetur enim deserunt adipisicing culpa culpa quis proident. Occaecat voluptate Lorem commodo do esse sint commodo. Cillum nisi reprehenderit labore Lorem anim ipsum elit cupidatat ad amet irure fugiat.',

      shopCardNutrientTitle: 'Nutrition Only',
      shopCardNutrientImage: nutrientImage,
      shopNutrientVisibleSubText: 'Nisi in duis labore voluptate cupidatat do consequat id occaecat.',
      shopNutrientNonVisibleSubText1: 'How it works:',
      shopNutrientNonVisibleSubText2: 'Esse aliquip excepteur laboris consequat aliqua enim aliqua amet cupidatat ex tempor in id sint. Lorem deserunt ex qui aute adipisicing laboris. Laboris laborum mollit irure amet dolor laboris exercitation tempor eu cupidatat aute ad et aliqua. Tempor quis anim irure duis in aliquip commodo ullamco non.',
      shopNutrientNonVisibleSubText3: 'Sit cupidatat culpa commodo cupidatat sit culpa qui minim amet est consequat aliquip. Laborum adipisicing commodo do pariatur culpa mollit exercitation exercitation reprehenderit eiusmod voluptate. Sunt est officia non enim cupidatat eu magna anim eiusmod consequat in culpa ullamco.',
      shopNutrientNonVisibleSubText4: 'Nostrud ea officia dolor do excepteur laboris quis labore pariatur. Anim reprehenderit anim tempor magna esse nulla irure do dolor exercitation aliqua occaecat excepteur nisi. Duis in eiusmod laborum irure irure sit excepteur ex in voluptate et nulla aliqua irure. Qui ad mollit quis quis do non velit aliqua dolore.',
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