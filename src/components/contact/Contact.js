import React, { Component } from 'react'
import MobileTopbar from '../functional/navigation/MobileTopbar'
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ButtonBar from '../functional/buttons/ButtonBar';
import Footer from '../functional/footer/Footer';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white',
        overflow: 'hidden',
        // background: `url(${backgroundShape}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        padding: 20,
        // paddingBottom: 60
    },
    grid: {
        width: 1000
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    }
})

const currencies = [
    {
        value: 'General',
        label: 'General',
    },
    {
        value: 'Training',
        label: 'Training',
    },
    {
        value: 'Support',
        label: 'Support',
    }
];

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Cat in the Hat',
            age: '',
            multiline: 'Controlled',
            contactButtonText: 'Send Message',
            contactToHomeLinkToString: '/',
            bottomNavFixed: true
        }
    }

    componentDidMount() {
        const contactHeight = this.contactClass.clientHeight;
        const contactWindowHeight = window.innerHeight;
        this.setState({ contactHeight, contactWindowHeight });

        if (contactHeight < contactWindowHeight) {
            this.setState({
                [this.state.bottomNavFixed]: true,
            });
        };

        console.log(contactHeight, contactWindowHeight, this.state.bottomNavFixed);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };



    render() {
        const { classes } = this.props;
        const currentPath = this.props.location.pathname

        return (
            <React.Fragment>
                <div ref={(contactClass) => this.contactClass = contactClass}>
                    <CssBaseline />
                    <MobileTopbar currentPath={currentPath} />
                    <div className={classes.root}>
                        <Grid container justify="center">
                            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='h5'>Get in Touch</Typography>
                                    <hr />
                                    <Typography variant='body2'>Please note that I am very busy and will do everything in my power to respond</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <form className={classes.container} noValidate autoComplete="off">
                                        {/* <Typography variant='h6'>Send Message</Typography> */}
                                        <TextField
                                            id="outlined-name"
                                            label="Name"
                                            className={classes.textField}
                                            onChange={this.handleChange('name')}
                                            margin="normal"
                                            variant="outlined"
                                            fullWidth
                                            required
                                        />

                                        <TextField
                                            id="outlined-email-input"
                                            label="Email"
                                            className={classes.textField}
                                            type="email"
                                            name="email"
                                            autoComplete="email"
                                            margin="normal"
                                            variant="outlined"
                                            fullWidth
                                            required
                                        />

                                        <TextField
                                            select
                                            label="Reason for Contact"
                                            className={classes.textField}
                                            value={this.state.currency}
                                            onChange={this.handleChange('currency')}
                                            SelectProps={{
                                                native: true,
                                                MenuProps: {
                                                    className: classes.menu,
                                                },
                                            }}
                                            margin="normal"
                                            variant="outlined"
                                            fullWidth
                                        >
                                            {currencies.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>

                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Your Message"
                                            multiline
                                            rows="4"
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            fullWidth
                                        />

                                    </form>
                                    <ButtonBar
                                        pageToPageLinkToString={this.state.contactToHomeLinkToString}
                                        pageButtonText={this.state.contactButtonText}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);