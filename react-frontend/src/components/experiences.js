import React, {Component} from 'react';

class Experiences extends Component {
    constructor(props){
        super(props);
        this.state = {experiences: []};
    }
    
    componentDidMount() {
        fetch('http://localhost:3030/experiences')
        .then(res => res.json())
        .then((data) => {
          this.setState({ experiences: data })
        })
    }

    render () {
        const experiences = this.state.experiences;
        if(experiences.length === 0){
            return (<h1>Loading...</h1>)
        }
        else{
            let i, j;
            let endDate;
            let techStack = 'Tech Stack - ';
            console.log(experiences);

            for(i = 0; i < experiences.length; i++){
                if(experiences[i].endDate.length === 0)
                    endDate = 'Present'
                else
                    endDate = experiences[i].endDate
                for(j = 0; j < experiences[i].techStack.length; j++){
                    techStack += ' ' + experiences[i].techStack[j]; 
                }
                return (
                    <div className = 'educations'>
                        <h3>{experiences[i].companyName}</h3>
                        <div className = 'period'>
                            <div id = 'left'> {experiences[i].startDate}</div>
                            <div id = 'right'>{endDate}</div>
                        </div>
                        <h4>{experiences[i].workDone}</h4>
                        {techStack}

                    </div>
                );
            }
        }
    }
}

export default Experiences;
