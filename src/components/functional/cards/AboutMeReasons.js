import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

const firstImage = require('../../../assets/image3.jpg');
const thirdImage = require('../../../assets/image5.jpg');
const fourthImage = require('../../../assets/image6.jpg');
const fifthImage = require('../../../assets/image7.jpg');

const styles = theme => ({
    itemContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 47,
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
    imageText: {
        color: 'white',
    },
    positionSetter: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    },
    textOverImage: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        marginLeft: 20,
        position: 'absolute',
        top: 27,
    },
    reasonWrapper: {
        padding: 30,
    }
})

class AboutMeReasons extends Component {

    render() {
        const { classes } = this.props;

        return (
            <Grid container xs={12} className={classes.itemContainer}>
                <Grid item xs={12}>
                    <div className={classes.positionSetter}>
                        <CardMedia
                            component="img"
                            className={classes.media}
                            image={firstImage}
                        />
                        <div className={classes.textOverImage}>
                            <Typography variant="h5" className={classes.imageText}>
                                My Story
                            </Typography>
                            <Typography variant="body2" className={classes.imageText}>
                                Tempor duis id laboris Lorem adipisicing ad sunt reprehenderit. Aute enim laboris eiusmod velit. Voluptate commodo quis Lorem id est ea deserunt eu commodo elit commodo ipsum.
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} className={classes.reasonWrapper}>
                    <Typography variant="h6" color="secondary">
                        My Why
                  </Typography>
                    <Typography variant="body2">
                        Incididunt nisi cupidatat nostrud culpa. Officia ullamco nulla cillum do velit sit duis ullamco occaecat cillum amet ut. Magna sint culpa nulla adipisicing excepteur ex.
                  </Typography>
                </Grid>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={thirdImage}
                />
                <Grid item xs={12} className={classes.reasonWrapper}>
                    <Typography variant="h6" color="secondary">
                        My Mission
                      </Typography>
                    <Typography variant="body2">
                        Tempor reprehenderit magna incididunt deserunt excepteur incididunt ipsum laborum cupidatat. Excepteur ullamco mollit ea deserunt voluptate reprehenderit ipsum culpa labore. Dolore quis culpa do in esse adipisicing quis dolore consectetur officia dolore veniam.
                      </Typography>
                </Grid>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={fourthImage}
                />
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
                    image={fifthImage}
                />
            </Grid>
        )
    }
}

export default withStyles(styles)(AboutMeReasons);