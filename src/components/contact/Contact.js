import React, { Component } from 'react'
import axios from 'axios';
import MobileTopbar from '../functional/navigation/MobileTopbar'
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ContactSubmitBtn from '../functional/buttons/ContactSubmitBtn';
import EmailAlert from '../functional/alerts/EmailAlert';
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
            emailerName: '',
            emailSubject: 'General',
            emailAddress: '',
            emailMessage: '',
            multiline: 'Controlled',
            alertOpen: false,
            emailAlertText: 'This is the text',
            contactButtonText: 'Send Message',
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
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const emailSenderName = this.state.emailerName;
        const senderEmailAddress = this.state.emailAddress;
        const senderEmailSubject = this.state.emailSubject;
        const messageFromSender = this.state.emailMessage;
        this.setState({
            alertOpen: true,
            emailAlertText: "Email is on it's way, confirmation will arrive shortly."
        });
        axios({
            method: "POST", 
            url:"http://104.236.143.57:3005/api/send", 
            data: {
                name: emailSenderName,   
                email: senderEmailAddress,  
                subject: senderEmailSubject,
                messageText: messageFromSender
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                this.setState({
                    alertOpen: true,
                    emailAlertText: "Your email has been sent successfully. Expect to hear back within the next few days."
                });
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                this.setState({
                    alertOpen: true,
                    emailAlertText: "Unfortunately your email was not sent successfully. Please try and contact Randi through her Instagram."
                });
            }
        })
    }

    handleClose() {
        this.setState({
            alertOpen: false
        })
    }

    resetForm(){
        this.setState({
            emailerName: '',
            emailSubject: 'General',
            emailAddress: '',
            emailMessage: ''
        });
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
                                        <TextField
                                            id="outlined-name"
                                            name="name"
                                            label="Name"
                                            className={classes.textField}
                                            value={this.state.emailerName}
                                            onChange={this.handleChange('emailerName')}
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
                                    <ContactSubmitBtn
                                        type="submit"
                                        pageButtonText={this.state.contactButtonText}
                                        submitFunction={this.handleSubmit.bind(this)}
                                    />
                                    <EmailAlert
                                        openDialogBool={this.state.alertOpen}
                                        emailAlertDialogue={this.state.emailAlertText}
                                        emailAlertClose={this.handleClose.bind(this)}
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