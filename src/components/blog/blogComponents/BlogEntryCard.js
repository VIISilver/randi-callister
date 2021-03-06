import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
  card: {
    maxWidth: 400,
    marginTop: 35,
    [theme.breakpoints.up('lg')]: {
        minWidth: 400,
        marginRight: 35
    }
  },
  media: {
    height: 375,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  closeExpand: {
    transform: 'rotate(180deg)',
    display: 'block',
    marginLeft: 'auto',
  },
  expandOpen: {
    display: 'none',
  },
});

class BlogEntryCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={this.props.pageCardImage}
        />
        <CardHeader
          title={this.props.pageCardHeaderTitle}
        />
        <CardContent>
          <Typography component="p">
            {this.props.pageVisibleSubText}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {/* <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton> */}
          <IconButton
            className={classnames(
                {[classes.expandOpen]: !this.state.expanded},
                {[classes.closeExpand]: this.state.expanded}
                )}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
          <Typography component="p" variant="body1">
          Read more...
          </Typography>
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{this.props.pageNonVisible1}</Typography>
            <Typography paragraph>
            {this.props.pageNonVisible2}
            </Typography>
            <Typography paragraph>
            {this.props.pageNonVisible3}
            </Typography>
            <Typography paragraph>
            {this.props.pageNonVisible4}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

BlogEntryCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogEntryCard);
