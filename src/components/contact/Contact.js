import React, { Component } from 'react'
import MobileTopbar from '../functional/navigation/MobileTopbar'
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SectionHeader from '../functional/typo/SectionHeader';

const backgroundShape = require('../../assets/shape.svg');

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey['A500'],
        overflow: 'hidden',
        background: `url(${backgroundShape}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        padding: 20,
        paddingBottom: 200
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
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled'
    };

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
                <CssBaseline />
                <MobileTopbar currentPath={currentPath} />
                <div className={classes.root}>
                    <Grid container justify="center">
                        <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                            <Grid item xs={12} sm={6}>
                                <SectionHeader title="Get in Touch with Me" />
                                <SectionHeader subtitle="Please note that I am very busy and will do everything in my power to respond" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <form className={classes.container} noValidate autoComplete="off">
                                    <h1>Send Message</h1>

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
                                        id="outlined-select-currency-native"
                                        select
                                        label="Native select"
                                        className={classes.textField}
                                        value={this.state.currency}
                                        onChange={this.handleChange('currency')}
                                        SelectProps={{
                                            native: true,
                                            MenuProps: {
                                                className: classes.menu,
                                            },
                                        }}
                                        helperText="Please select your currency"
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
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);