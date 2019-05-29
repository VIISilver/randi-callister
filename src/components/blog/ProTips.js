import React, { Component } from 'react';
import MobileTopbar from '../functional/navigation/MobileTopbar';
import Footer from '../functional/footer/Footer';
import ScrollTop from '../functional/buttons/ScrollTop';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BlogEntryCard from './blogComponents/BlogEntryCard';

const shoeWeightImage = require('../../assets/image9.jpg');
const buildingRainImage = require('../../assets/image14.jpg');
const mountainTopImage = require('../../assets/image12.jpg');


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
  blogTopHeader: {
    backgroundColor: '#b2b9e1',
    width: '100%',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  blogTopHeaderText: {
    color: 'white',
  },
  subHeadBreak: {
    margin: 10,
    borderColor: '#74215a',
    width: '87%',
    display: 'block',
  }
})

class ProTips extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blogPostCardImage: shoeWeightImage,
      blogPostCardTitle: 'Pro Tip 1',
      blogVisibleSubText: 'Magna aliqua nulla officia consectetur anim ex.',
      blogLongDate: 'March 29, 2019',
      blogNonVisible1: 'Duis excepteur Lorem dolor amet proident labore cupidatat minim ad proident officia aliqua amet.',
      blogNonVisible2: 'Veniam exercitation consequat velit amet et.',
      blogNonVisible3: 'Qui nulla cupidatat nostrud aute est incididunt sunt elit esse anim.',
      blogNonVisible4: 'Excepteur aliquip aute sint dolore.',

      blogPostCardImage1: buildingRainImage,
      blogPostCardTitle1: 'Pro Tip 2',
      blogVisibleSubText1: 'Anim incididunt ad voluptate amet fugiat sunt voluptate sunt non anim ullamco fugiat.',
      blogLongDate1: 'March 31, 2019',
      blog1NonVisible1: 'Ea sit dolore tempor qui do nisi deserunt minim esse laborum.',
      blog1NonVisible2: 'Tempor ipsum eu id occaecat anim pariatur minim dolore aliquip. Laborum pariatur id dolore magna id mollit sint sunt. Do fugiat nostrud esse id.',
      blog1NonVisible3: 'Aliquip deserunt excepteur ut quis duis.',
      blog1NonVisible4: 'Irure minim tempor non labore aliqua. Irure proident consequat in dolore veniam voluptate. Voluptate non qui nisi id exercitation esse Lorem labore id.',

      blogPostCardImage2: mountainTopImage,
      blogPostCardTitle2: 'Pro Tip 3',
      blogVisibleSubText2: 'Tempor et cillum dolore id reprehenderit duis sit labore.',
      blogLongDate2: 'April 3, 2019',
      blog2NonVisible1: 'Deserunt consequat nostrud laboris aute. Velit minim labore non est aliquip quis. Dolore cillum do dolor elit ex duis aliquip nulla aliquip aute. Lorem cillum non eiusmod voluptate ex reprehenderit non tempor cillum sunt do.',
      blog2NonVisible2: 'Aliquip amet aute proident tempor non duis ipsum duis irure exercitation proident nostrud do officia.',
      blog2NonVisible3: 'Minim elit amet do ut.',
      blog2NonVisible4: 'Nulla in labore nulla duis id aliquip quis elit nisi minim consectetur excepteur. Nulla aliquip anim proident adipisicing occaecat sint qui fugiat laborum ex exercitation. Ipsum laboris sunt eu Lorem commodo duis nisi occaecat non ullamco qui.'
    }
  }

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname

    return (
      <React.Fragment>
        <CssBaseline />
        <MobileTopbar currentPath={currentPath} />
        <div className={classes.blogTopHeader}>
          <Typography variant="h3" className={classes.blogTopHeaderText}>
            Pro Tips
          </Typography>
        </div>
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <BlogEntryCard
              pageCardImage={this.state.blogPostCardImage}
              pageCardHeaderTitle={this.state.blogPostCardTitle}
              pageVisibleSubText={this.state.blogVisibleSubText}
              pageLongDate={this.state.blogLongDate}
              pageNonVisible1={this.state.blogNonVisible1}
              pageNonVisible2={this.state.blogNonVisible2}
              pageNonVisible3={this.state.blogNonVisible3}
              pageNonVisible4={this.state.blogNonVisible4}
              />
              <BlogEntryCard
              pageCardImage={this.state.blogPostCardImage1}
              pageCardHeaderTitle={this.state.blogPostCardTitle1}
              pageVisibleSubText={this.state.blogVisibleSubText1}
              pageLongDate={this.state.blogLongDate1}
              pageNonVisible1={this.state.blog1NonVisible1}
              pageNonVisible2={this.state.blog1NonVisible2}
              pageNonVisible3={this.state.blog1NonVisible3}
              pageNonVisible4={this.state.blog1NonVisible4}
              />
              <BlogEntryCard
              pageCardImage={this.state.blogPostCardImage2}
              pageCardHeaderTitle={this.state.blogPostCardTitle2}
              pageVisibleSubText={this.state.blogVisibleSubText2}
              pageLongDate={this.state.blogLongDate2}
              pageNonVisible1={this.state.blog2NonVisible1}
              pageNonVisible2={this.state.blog2NonVisible2}
              pageNonVisible3={this.state.blog2NonVisible3}
              pageNonVisible4={this.state.blog2NonVisible4}
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

export default withStyles(styles)(ProTips);