import React, { Component } from 'react';
import {connect} from 'react-redux';


class HowUnderstand extends Component { 

    state ={
        understand: ''
    }
    //takes user to next page
    //saves how user is understanding material in reducer
    goToHowSupport = ()=>{
        if( this.state.understand === ''){
            alert('Fill in form with a number')
        } else {
            this.props.dispatch({ type: 'UNDERSTAND', payload: this.state });
            this.props.history.push(`/how-support`);
        } 
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
                <h2>How well are you understanding the content?</h2>
                <input type="number" onChange={(event)=>this.handleChange(event, 'understand')} />
                <button onClick={this.goToHowSupport}>Next</button>
            </div>
        )
    }
}

export default connect()(HowUnderstand);