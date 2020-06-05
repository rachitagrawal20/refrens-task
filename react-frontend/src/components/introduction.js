import React, {Component} from 'react';

class Introduction extends Component {
    constructor(props){
        super(props);
        this.state = {introduction: []};
    }
    
    componentDidMount() {
        fetch('http://localhost:3030/introduction')
        .then(res => res.json())
        .then((data) => {
          this.setState({ introduction: data })
        })
    }

    render () {
        const introduction = this.state.introduction;
        if(introduction.length === 0){
            return (<h1>Loading...</h1>)
        }
        else{
            console.log(introduction);
            return introduction.map((introduction) => (
                <div className = 'introduction'>
                <h3>{introduction.candidateName}</h3>
                <h4>{introduction.description}</h4>
                </div>

            ));
        }
    }
}

export default Introduction;
