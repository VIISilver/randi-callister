import React, { Component } from 'react';
import AboutCard from '../../about/aboutcards/AboutCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



class MyTeamAbout extends Component {

  constructor(props) {
    super(props);



    this.state = {
      name: 'Joe',
      description: 'Veniam id pariatur do sint Lorem.',
      name1: 'Jane',
      description1: 'Laborum quis excepteur id cillum laboris officia duis.',
      name2: 'Mav',
      description2: 'Ut est qui occaecat ea nulla ut.',
      name3: 'Fido',
      description3: 'Pariatur non qui labore mollit eu consequat elit id irure magna.'
    }
  }



  render() {

    return (
      <div>
        <Typography variant="h6">
          GET TO KNOW THE TEAM
        </Typography>
        <AboutCard
          teamMemberName={this.state.name}
          teamMemberDescription={this.state.description}
        />
        <AboutCard
          teamMemberName={this.state.name1}
          teamMemberDescription={this.state.description1}
        />
        <AboutCard
          teamMemberName={this.state.name2}
          teamMemberDescription={this.state.description2}
        />
        <AboutCard
          teamMemberName={this.state.name3}
          teamMemberDescription={this.state.description3}
        />
      </div>
    );
  }
}

export default MyTeamAbout;