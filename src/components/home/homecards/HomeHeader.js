import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import ButtonBar from '../../functional/buttons/ButtonBar';

const topImage = require('../../../assets/cover-image.jpg');

const styles = () => ({
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
        height: "57vh",
        background: `url(${topImage}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
    },
    homeImageText: {
        textAlign: 'center',
        color: 'white'
    },
    itemContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        
    }
});

class HomeHeader extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        homeHeaderButtonText: 'Contact Randi',
        homeHeadertoContactLinkToString: '/contact',
      }
    }
    render() {
        const { classes } = this.props;
        return (
            <CardHeader className={classes.media}
                title={
                    <Typography variant="h4" className={classes.homeImageText}>
                        Don't know how to reach your fitness goals?
                    </Typography>
                }
                subheader={
                    <div className={classes.itemContainer}>
                    <Typography variant="body2" className={classes.homeImageText}>
                        That's Ok, follow me and I will show you how!
                    </Typography>
                    <ButtonBar 
                    pageButtonText={this.state.homeHeaderButtonText}
                    pageToPageLinkToString={this.state.homeHeadertoContactLinkToString}
                     />
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles)(HomeHeader);