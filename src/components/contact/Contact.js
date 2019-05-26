import React, { Component } from 'react'
import axios from 'axios';
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
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        padding: 20,
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
    },
    subHeadBreak: {
      borderColor: '#74215a',
      width: '100%',
      display: 'block',
    }
})

const emailSubjectsArr = [
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
    },
    {
        value: 'Questions',
        label: 'Questions',
    },
    {
        value: 'Purchasing',
        label: 'Purchasing',
    }
];

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            emailerName: 'Jared Parker',
            emailSubject: 'General',
            emailAddress: 'jared.parker7890@gmail.com',
            emailMessage: 'Jello World',
            multiline: 'Controlled',
            contactButtonText: 'Send Message',
            contactToHomeLinkToString: '/',
            contactHeight: 0,
            contactWindowHeight: 0,
            bottomNavFixed: false
        }
    }

    componentDidMount() {
        const contactHeight = this.contactClass.clientHeight;
        const contactWindowHeight = window.innerHeight;
        if (contactHeight < contactWindowHeight) {
            this.setState({
                bottomNavFixed: true,
            });
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        }, console.log(this.state));
    }

    handleSubmit(e){
        e.preventDefault();
        const emailSenderName = this.state.emailerName;
        const senderEmailAddress = this.state.emailAddress;
        const messageFromSender = this.state.emailMessage;
        console.log('handlesubmit fired')
        axios({
            method: "POST", 
            url:"http://localhost:3005/send", 
            data: {
                name: 'Jared Parker',   
                email: 'jared.parker7890@gmail.com',  
                messsage: 'for all that is holy please work'
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                // this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }



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
                                    <hr className={classes.subHeadBreak} />
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
                                            value={this.state.emailerName}
                                            margin="normal"
                                            variant="outlined"
                                            fullWidth
                                            required
                                        />

                                        <TextField
                                            id="outlined-email-input"
                                            label="Email"
                                            className={classes.textField}
                                            value={this.state.emailAddress}
                                            onChange={this.handleChange('emailAddress')}
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
                                            {emailSubjectsArr.map(option => (
                                                <option 
                                                key={option.value} 
                                                onClick={this.handleChange('emailSubject')}
                                                value={option.value}>
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
                                            value={this.state.emailMessage}
                                            onChange={this.handleChange('emailMessage')}
                                            margin="normal"
                                            variant="outlined"
                                            fullWidth
                                        />

                                    </form>
                                    <button type="submit" onClick={this.handleSubmit.bind(this)} method="POST">Submit</button>
                                    <ButtonBar
                                        pageToPageLinkToString={this.state.contactToHomeLinkToString}
                                        pageButtonText={this.state.contactButtonText}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <Footer bottomNavFixedIfShorter={this.state.bottomNavFixed} />
                </div>
            </React.Fragment>
        )
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);