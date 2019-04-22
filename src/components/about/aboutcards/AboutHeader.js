import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

const topImage = require('../../../assets/image18.jpg');

const styles = () => ({
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
        height: "43vh",
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

class AboutHeader extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        homeHeaderButtonText: 'Follow Randi',
        homeHeadertoContactLinkToString: '/contact',
      }
    }
    render() {
        const { classes } = this.props;
        return (
            <CardHeader className={classes.media}
                title={
                    <Typography variant="h4" className={classes.homeImageText}>
                        About Me
                    </Typography>
                }
            />
        )
    }
}

export default withStyles(styles)(AboutHeader);