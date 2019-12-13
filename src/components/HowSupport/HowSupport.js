import React, { Component } from 'react';

class HowSupport extends Component { 

    goToComments = ()=>{
        this.props.history.push(`/comments`);
    }
    
    render(){
        return(
            <div>
                <h2>How well are you being supported?</h2>
                <input type="text"></input>
                <button onClick={this.goToComments}>Next</button>
            </div>
        )
    }
}

export default HowSupport;