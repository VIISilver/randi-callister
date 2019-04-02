import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({

    paper: {
        textAlign: 'left',
        color: theme.palette.text.secondary
    },
    itemContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        
    },
    baseline: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: theme.spacing.unit * 2,
            marginBottom: theme.spacing.unit * 2,
            marginLeft: 0
        
    },
    inline: {
        display: 'inline-block',
        marginLeft: theme.spacing.unit * 4,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        }
    },
    teamMemberPicture: {
        height: 215,
        borderRadius: 4,
        [theme.breakpoints.down('sm')]: {
            // ⚠️ object-fit is not supported by IE 11.
            objectFit: 'cover',
        },
        [theme.breakpoints.up('lg')]: {
            height: 315,
        }
    }

})


class TeamAboutCard extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={12} sm={6}>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <div className={classes.itemContainer}>
                            <CardMedia
                                component="img"
                                image={this.props.teamMemberImage}
                                className={classes.teamMemberPicture}
                            />
                            <div className={classes.baseline}>
                                <div className={classes.inlineRight}>
                                    <Typography variant="h4" gutterBottom>
                                        {this.props.teamMemberName}
                                    </Typography>
                                    <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                                        {this.props.teamMemberDescription}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </div>
            </Grid>
        )
    }
}

export default withStyles(styles)(TeamAboutCard);