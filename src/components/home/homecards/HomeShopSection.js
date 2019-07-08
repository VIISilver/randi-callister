import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBar from '../../functional/buttons/ButtonBar';

const burnItBabeImage = require("../../../assets/Women's-Summer-Weight-Loss.jpg");
const burnItBroImage = require('../../../assets/Weekly-Personalized-Training.jpg');
const nutritionOnlyImage = require('../../../assets/The-Ultimate-Nutrition-Guide.jpg');

const styles = {
    bigAvatar: {
        margin: 10,
        width: 150,
        height: 150,
        borderRadius: 0
    },
    homeAboutSectionWrapper: {
        marginTop: 90,
        marginBottom: 90,
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
            <Grid item xs={12} className={classes.homeAboutSectionWrapper}>
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