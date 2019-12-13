import React, { Component } from 'react';

class HowFeel extends Component { 
    goToHowUnderstand = ()=>{
        this.props.history.push(`/how-understand`);
    }
    render(){
        return(
            <div>
                <h2>How Are You Feeling?</h2>
                <input type="text"></input>
                <button onClick={this.goToHowUnderstand}>Next</button>
            </div>
        )
    }
}

export default HowFeel