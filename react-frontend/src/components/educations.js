import React, {Component} from 'react';

class Educations extends Component {
    constructor(props){
        super(props);
        this.state = {educations: []};
    }
    
    componentDidMount() {
        fetch('http://localhost:3030/educations')
        .then(res => res.json())
        .then((data) => {
          this.setState({ educations: data })
        })
    }

    render () {
        const educations = this.state.educations;
        if(educations.length === 0){
            return (<h1>Loading...</h1>)
        }
        else{
            console.log(educations);
            let i;
            let endDate;
            let ret = [];
            let toPush;
            for(i = 0; i < educations.length; i++){
                if(educations[i].endDate.length === 0)
                    endDate = 'Present'
                else
                endDate = educations[i].endDate

                toPush = 
                    <div className = 'educations'>
                        <h3>{educations[i].instituteName}</h3>
                        <div className = 'period'>
                            <div id = 'left'> {educations[i].startDate}</div>
                            <div id = 'right'>{endDate}</div>
                        </div>
                        <h4>{educations[i].coureTaken}</h4>
                    </div>
                ret.push(toPush);
                
            }
            return ret;
        }
    }
}

export default Educations;
