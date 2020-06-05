import React, {Component} from 'react';

class Achievements extends Component {
    constructor(props){
        super(props);
        this.state = {achievements: []};
    }
    
    componentDidMount() {
        fetch('http://localhost:3030/achievements')
        .then(res => res.json())
        .then((data) => {
          this.setState({ achievements: data })
        })
    }

    render () {
        const achievements = this.state.achievements;
        if(achievements.length === 0){
            return (<h1>Loading...</h1>)
        }
        else{
            console.log(achievements);
            return achievements.map((achievement) => (
                <div className = 'educations'>
                <h4>{achievement.achievement}</h4>
                </div>

            ));
        }
    }
}

export default Achievements;
