import React, { Component } from 'react';
import {connect} from 'react-redux';

class HowSupport extends Component { 

    state ={
        supported: ''
    }

    //takes user to next page
    //saves how user is supported in reducer
    goToComments = ()=>{
        if( this.state.supported === ''){
            alert('Fill in form with a number')
        } else {
            this.props.dispatch({ type: 'SUPPORTED', payload: this.state });
            this.props.history.push(`/comments`);
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
                <h2>How well are you being supported?</h2>
                <input type="number" onChange={(event)=>this.handleChange(event, 'supported')} />
                <button onClick={this.goToComments}>Next</button>
            </div>
        )
    }
}

export default connect()(HowSupport);