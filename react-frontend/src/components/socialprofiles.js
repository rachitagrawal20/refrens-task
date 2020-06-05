import React, {Component} from 'react';

class SocialProfiles extends Component {
    constructor(props){
        super(props);
        this.state = {socialprofiles: []};
    }
    
    componentDidMount() {
        fetch('http://localhost:3030/socialprofiles')
        .then(res => res.json())
        .then((data) => {
          this.setState({ socialprofiles: data })
        })
    }

    render () {
        const socialprofiles = this.state.socialprofiles;
        if(socialprofiles.length === 0){
            return (<h1>Loading...</h1>)
        }
        else{
            console.log(socialprofiles);
            return socialprofiles.map((socialprofile) => (
                <div className = 'educations'>
                    <h3>{socialprofile.siteName}</h3>
                    {socialprofile.profileLink}
                </div>  

            ));
        }
    }
}

export default SocialProfiles;
