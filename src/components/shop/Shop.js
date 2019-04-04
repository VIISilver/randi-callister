import React, { Component } from 'react';
import MobileTopbar from '../functional/navigation/MobileTopbar';
import Footer from '../functional/footer/Footer';
import ScrollTop from '../functional/buttons/ScrollTop';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CardItem from '../functional/cards/CardItem';
import SectionHeader from '../functional/typo/SectionHeader';
import CardMedia from '@material-ui/core/CardMedia';
import ShopItemCard from './shopComponents/ShopItemCard';

const burnItImage = require('../../assets/shop/burnit-300x300.png');

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
          <Typography variant="h2" className={classes.shopTopHeaderText}>
            Shop
          </Typography>
        </div>
        <div className={classes.root}>
          <hr className={classes.subHeadBreak} />
          <Typography variant="h3">
            Programs
          </Typography>
          <hr className={classes.subHeadBreak} />
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <ShopItemCard
                pageCardHeaderTitle={this.state.shopCardWomanTitle}
                pageCardImage={this.state.shopCardWomanImage}
                pageVisibleSubText={this.state.shopWomanVisibleSubText}
                pageNonVisible1={this.state.shopWomanNonVisibleSubText1}
                pageNonVisible2={this.state.shopWomanNonVisibleSubText2}
                pageNonVisible3={this.state.shopWomanNonVisibleSubText3}
                pageNonVisible4={this.state.shopWomanNonVisibleSubText4}
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

export default withStyles(styles)(Shop);