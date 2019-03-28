import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const fifthImage = require('../../../assets/image10.jpg');

const styles = {
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MyTeamAbout(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={fifthImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            Joe
          </Typography>
          <Typography component="p">
            Laboris culpa eiusmod adipisicing consectetur cupidatat amet in proident laborum voluptate tempor id magna. Sint ipsum occaecat qui pariatur id ullamco nostrud sunt ut ullamco in. Labore qui elit eiusmod nulla nisi ad exercitation ex commodo. Pariatur do nisi laboris culpa duis cillum tempor Lorem.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MyTeamAbout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyTeamAbout);
