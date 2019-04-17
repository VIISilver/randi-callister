import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBar from '../../functional/buttons/ButtonBar';

const burnItBabeImage = require('../../../assets/shop/burnit-300x300.png');
const burnItBroImage = require('../../../assets/shop/burnitdude-300x300.png');
const nutritionOnlyImage = require('../../../assets/shop/nutritionalonly-300x300.png');

const styles = {
    bigAvatar: {
        margin: 10,
        width: 100,
        height: 100,
    },
    homeAboutSectionWrapper: {
        marginTop: 70,
    },
    itemContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        
    }
};

class HomeShopSection extends Component {

    constructor(props) {
        super(props)

        this.state = {
            homeShopSectionButtonText: 'Learn More',
            homeShopSectionToContactLinkToString: '/shop',
        }
    }

    render() {

        const { classes } = this.props;
        
        return (
            <Grid className={classes.homeAboutSectionWrapper}>
                <Typography variant="h5" align='center'>
                    My Programs
                </Typography>
                <Grid container justify="center" alignItems="center">
                    <Avatar alt="Burn It Babe Shop Logo" src={burnItBabeImage} className={classes.bigAvatar} />
                    <Avatar alt="Burn It Babe Shop Logo" src={burnItBroImage} className={classes.bigAvatar} />
                    <Avatar alt="Burn It Babe Shop Logo" src={nutritionOnlyImage} className={classes.bigAvatar} />
                </Grid>
                <div className={classes.itemContainer}>
                <ButtonBar
                pageToPageLinkToString={this.state.homeShopSectionToContactLinkToString}
                pageButtonText={this.state.homeShopSectionButtonText}
                />
                </div>
            </Grid>
        )
    };
}

HomeShopSection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeShopSection);