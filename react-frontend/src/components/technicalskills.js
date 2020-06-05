import React, {Component} from 'react';

class TechnicalSkills extends Component {
    constructor(props){
        super(props);
        this.state = {technicalskills: []};
    }
    
    componentDidMount() {
        fetch('http://localhost:3030/technicalskills')
        .then(res => res.json())
        .then((data) => {
          this.setState({ technicalskills: data })
        })
    }

    render () {
        const technicalskills = this.state.technicalskills;
        if(technicalskills.length === 0){
            return (<h1>Loading...</h1>)
        }
        else{
            console.log(technicalskills);
            return technicalskills.map((technicalskill) => 
                
            (

                <div className = 'educations'>
                <h3>{technicalskill.skillName}</h3>
                {technicalskill.proficiency}

                </div>

            ));
        }
    }
}

export default TechnicalSkills;
