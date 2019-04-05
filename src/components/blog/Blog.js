import React, { Component } from 'react';
import MobileTopbar from '../functional/navigation/MobileTopbar';
import Footer from '../functional/footer/Footer';
import ScrollTop from '../functional/buttons/ScrollTop';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BlogEntryCard from './blogComponents/BlogEntryCard';

const burnItImage = require('../../assets/image13.jpg');


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

class Blog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blogPostCardImage1: burnItImage,
      blogPostCardTitle: 'Blog Post 1',
      blogVisibleSubText: 'Magna aliqua nulla officia consectetur anim ex.',
      blogLongDate: 'March 29, 2019',
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
          <Typography variant="h2" className={classes.blogTopHeaderText}>
            Blog
          </Typography>
        </div>
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <BlogEntryCard
              pageCardImage={this.state.blogPostCardImage1}
              pageCardHeaderTitle={this.state.blogPostCardTitle}
              pageVisibleSubText={this.state.blogVisibleSubText}
              pageLongDate={this.state.blogLongDate}

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

export default withStyles(styles)(Blog);