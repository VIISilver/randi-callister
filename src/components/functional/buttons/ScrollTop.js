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
        this.scrollFunction = this.scrollFunction.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.scrollFunction();
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    topFunction() {
        // For Safari
        document.body.scrollTop = 0;
        // For Chrome, Firefox, IE and Opera
        document.documentElement.scrollTop = 0;
    };

    render() {
        const { classes } = this.props;

        return (
            <div
                style={{ overflowY: 'scroll' }}
                onScroll={this.handleScroll}
            >
                <React.Fragment>
                    <Fab
                        id="myBtn"
                        variant="extended"
                        size="small"
                        color="secondary"
                        aria-label="Add"
                        onClick={this.topFunction}
                        className={classes.margin}
                    >
                        <NavigationIcon />
                    </Fab>
                </React.Fragment>
            </div>
        )
    }
}

export default withStyles(styles)(ScrollTop);