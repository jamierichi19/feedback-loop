import React, { Component } from 'react';

class HowUnderstand extends Component { 

    goToHowSupport = ()=>{
        this.props.history.push(`/how-support`);
    }
    render(){
        return(
            <div>
                <h2>How well are you understanding the content?</h2>
                <input type="text"></input>
                <button onClick={this.goToHowSupport}>Next</button>
            </div>
        )
    }
}

export default HowUnderstand;