import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import './ScrollTop.css';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit
    },
})

class ScrollTop extends Component {
    constructor(props) {
        super(props);
        this.topFunction = this.topFunction.bind(this);
    }

    componentDidMount() {
        window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("myBtn").style.display = "block";
            } else {
                document.getElementById("myBtn").style.display = "none";
            }
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Fab
                    id="myBtn"
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="Add"
                    onClick={this.topFunction}
                    className={classes.margin}
                >
                    <NavigationIcon />
                </Fab>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ScrollTop);