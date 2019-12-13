import React, { Component } from 'react';
import {connect} from 'react-redux';

class Comments extends Component { 

    state ={
        comments: ''
    }

    //takes user to next page
    //saves user's comments in reducer
    goToReview = ()=>{
        this.props.dispatch({ type: 'COMMENTS', payload: this.state });
        this.props.history.push(`/review`);
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
                <h2>Any comments you want to leave?</h2>
                <input type="text" onChange={(event)=>this.handleChange(event, 'comments')}/>
                <button onClick={this.goToReview}>Next</button>
            </div>
        )
    }

}

export default connect()(Comments);