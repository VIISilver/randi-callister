import React, { Component } from 'react';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

const firstImage = require('../../../assets/image7.jpg');
const randiCertImage = require('../../../assets/randi-cfsc-cert.JPG');

const styles = theme => ({
    itemContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 23,
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
    imageText: {
        color: 'white',
    },
    textOverImage: {
        display: 'flex',
        flexDirection: 'column',
        padding: 30,
        top: 27,
        background: `url(${firstImage}) no-repeat`,
        backgroundSize: 'cover',
        objectFit: 'cover',
        backgroundPosition: 'top',
    },
    reasonWrapper: {
        padding: 30,
    },
    paperCredentials: {
        marginTop: 30,    
    }
})

class AboutMeReasons extends Component {

    render() {
        const { classes } = this.props;

        return (
            <Grid container xs={12} className={classes.itemContainer}>
                <Grid item xs={12}>
                <div className={classnames(classes.textOverImage, "transform-carousel-img-shadow")}>
                    <Typography variant="h5" className={classes.imageText}>
                    My Mission
                    </Typography>
                    <Typography variant="body2" className={classes.imageText}>
                    In high school, I had never been to a gym and I ate whatever I wanted. I was also 60 pounds heavier, had a lot of anxiety, and often felt low on energy. I decided I wanted to be healthier and happier and that's when I stepped into the gym for the first time. That choice changed my life. I was definitely seeing some results but I wanted more, so I was able to get a trainer and then I was able to control my workouts, nutrition, and results better than ever before. That is when i decided... "This is my passion and this is what I want to do!" So i went to school, became certified, and started working for a local gym. After 2 years there, I decided it was time to build my own business and here I am today!
                    </Typography>
                </div>
                </Grid>
                <Paper className={classes.paperCredentials}>
                <Grid item xs={12} className={classes.reasonWrapper}>
                    <Typography variant="h6" color="secondary">
                        My Credentials
                          </Typography>
                    <Typography variant="body2">
                        Consequat proident incididunt excepteur elit commodo. Qui aliqua id elit minim. Et reprehenderit ipsum consectetur pariatur officia mollit ipsum minim dolor. Commodo dolore laborum incididunt labore Lorem.
                          </Typography>
                </Grid>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={randiCertImage}
                />
                </Paper>
            </Grid>
        )
    }
}

export default withStyles(styles)(AboutMeReasons);