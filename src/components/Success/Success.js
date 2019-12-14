import React, { Component } from 'react';

class Success extends Component { 

    //takes user back to the beginning
    goToHowFeel = ()=>{
        this.props.history.push(`/`);
    }
    render(){
        return(
            <div>
                <h1>Success</h1>
                <h2>Thank You For Completing Feedback!</h2>
                <button onClick={this.goToHowFeel}>Leave New Feedback</button>
            </div>
            
        )
    }
}

export default Success;