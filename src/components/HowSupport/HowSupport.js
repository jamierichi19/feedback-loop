import React, { Component } from 'react';
import {connect} from 'react-redux';

class HowSupport extends Component { 

    state ={
        supported: ''
    }

    //takes user to next page
    //saves how user is supported in reducer
    goToComments = ()=>{
        this.props.dispatch({ type: 'SUPPORTED', payload: this.state });
        this.props.history.push(`/comments`);
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
                <input type="text" onChange={(event)=>this.handleChange(event, 'understand')} />
                <button onClick={this.goToComments}>Next</button>
            </div>
        )
    }
}

export default connect()(HowSupport);