import React, { Component } from 'react'
import MobileTopbar from '../functional/navigation/MobileTopbar'
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class Contact extends Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
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
                            <Grid item xs={12}>
                                <form className={classes.container} noValidate autoComplete="off">
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        className={classes.textField}
                                        value={this.state.name}
                                        onChange={this.handleChange('name')}
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <TextField
                                        id="outlined-uncontrolled"
                                        label="Uncontrolled"
                                        defaultValue="foo"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="Hello World"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <TextField
                                        error
                                        id="outlined-error"
                                        label="Error"
                                        defaultValue="Hello World"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <TextField
                                        disabled
                                        id="outlined-disabled"
                                        label="Disabled"
                                        defaultValue="Hello World"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
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
                                    />

                                    <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        className={classes.textField}
                                        type="password"
                                        autoComplete="current-password"
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Read Only"
                                        defaultValue="Hello World"
                                        className={classes.textField}
                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                    />

                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Multiline"
                                        multiline
                                        rowsMax="4"
                                        value={this.state.multiline}
                                        onChange={this.handleChange('multiline')}
                                        className={classes.textField}
                                        margin="normal"
                                        helperText="hello"
                                        variant="outlined"
                                    />

                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Multiline"
                                        multiline
                                        rows="4"
                                        defaultValue="Default Value"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <TextField
                                        id="outlined-helperText"
                                        label="Helper text"
                                        defaultValue="Default Value"
                                        className={classes.textField}
                                        helperText="Some important text"
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <TextField
                                        id="outlined-with-placeholder"
                                        label="With placeholder"
                                        placeholder="Placeholder"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <TextField
                                        id="outlined-textarea"
                                        label="Multiline Placeholder"
                                        placeholder="Placeholder"
                                        multiline
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <TextField
                                        id="outlined-number"
                                        label="Number"
                                        value={this.state.age}
                                        onChange={this.handleChange('age')}
                                        type="number"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <TextField
                                        id="outlined-search"
                                        label="Search field"
                                        type="search"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="Select"
                                        className={classes.textField}
                                        value={this.state.currency}
                                        onChange={this.handleChange('currency')}
                                        SelectProps={{
                                            MenuProps: {
                                                className: classes.menu,
                                            },
                                        }}
                                        helperText="Please select your currency"
                                        margin="normal"
                                        variant="outlined"
                                    >
                                        {currencies.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
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
                                    >
                                        {currencies.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="outlined-full-width"
                                        label="Label"
                                        style={{ margin: 8 }}
                                        placeholder="Placeholder"
                                        helperText="Full width!"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />

                                    <TextField
                                        id="outlined-bare"
                                        className={classes.textField}
                                        defaultValue="Bare"
                                        margin="normal"
                                        variant="outlined"
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