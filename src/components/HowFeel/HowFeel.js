import React, { Component } from 'react';
import {connect} from 'react-redux';

class HowFeel extends Component { 
    state ={
        feeling: ''
    }
    //takes user to next page
    goToHowUnderstand = ()=>{
        this.props.dispatch({ type: 'FEELING', payload: this.state });
        this.props.history.push(`/how-understand`);
    }
    // keeps track of information being typed in form
    handleChange = (event, propertyName) => {
        console.log('Got a change:', event.target.value, propertyName );
        this.setState({
          [propertyName]: event.target.value
      })
      }
    render(){
        return(
            <div>
                <h2>How Are You Feeling?</h2>
                <input type="text" onChange={(event)=>this.handleChange(event, 'feeling')}/>
                <button onClick={this.goToHowUnderstand}>Next</button>
            </div>
        )
    }
}

export default connect()(HowFeel)