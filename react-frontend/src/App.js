import React, {Component} from 'react';
import './App.css';
import Experiences from './components/experiences';
import Introduction from './components/introduction';
import Projects from './components/projects';
import Educations from './components/educations';
import TechnicalSkills from './components/technicalskills';
import SocialProfiles from './components/socialprofiles';
import Achievements from './components/achievements';

class App extends Component {
  render () {
    return (
      <div className = "App">
        <Introduction />
        <div className = 'sections'>
          <h1>PROFILE LINKS</h1>
          <SocialProfiles />
          <h1>EDUCATIONS</h1>
          <Educations />
          <h1>EXPERIENCES</h1>
          <Experiences />
          <h1>PROJECTS</h1>
          <Projects />
          <h1>TECHNICAL SKILLS</h1>
          <TechnicalSkills />
          <h1>ACHIEVEMENTS</h1>
          <Achievements />
        </div>

      </div>
    );
  }
}

export default App;
