import React, {Component} from 'react';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {projects: []};
    }
    
    componentDidMount() {
        fetch('http://localhost:3030/projects')
        .then(res => res.json())
        .then((data) => {
          this.setState({ projects: data })
        })
    }

    render () {
        const projects = this.state.projects;
        if(projects.length === 0){
            return (<h1>Loading...</h1>)
        }
        else{
            console.log(projects);
            let i, j;
            let endDate;
            let techStack = 'Tech Stack - ';
            let ret = [];
            let topush;

            for(i = 0; i < projects.length; i++){
                let contributions = [];
                if(projects[i].endDate.length === 0)
                    endDate = 'Present'
                else
                    endDate = projects[i].endDate
                for(j = 0; j < projects[i].techStack.length; j++){
                    techStack += ' ' + projects[i].techStack[j]; 
                }
                for(j = 0; j < projects[i].contributions.length; j++)
                    contributions.push(<h4>{projects[i].contributions[j]}</h4>);
                
                topush = 
                    <div className = 'educations'>
                        <h3>{projects[i].projectTitle}</h3>
                        <div className = 'period'>
                                <div id = 'left'> {projects[i].startDate}</div>
                                <div id = 'right'>{endDate}</div>
                        </div>
                        
                        {contributions}
                        {techStack}
                        
                    </div>
                ret.push(topush);

                
            }
            return ret;
            
        }
    }
}

export default Projects;
