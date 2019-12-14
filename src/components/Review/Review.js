import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component { 

    //takes user to next page
    goToSuccess = ()=>{
        this.props.history.push(`/success`);
    }
    render(){
        console.log(this.props.reduxState)
        return(
            <div>
                <h2>Review Your Feedback!</h2>
                <p>Feelings: {this.props.Feelings}</p>
                <p>Understandings: {this.props.Understandings}</p>
                <p>Support: {this.props.Support}</p>
                <p>Comments: {this.props.Comments}</p>
                <button onClick={this.goToSuccess}>Submit</button>
                
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    Feelings: reduxState.feelingReducer.feeling,
    Understandings: reduxState.understandReducer.understand,
    Support: reduxState.supportedReducer.supported,
    Comments: reduxState.commentReducer.comments
})

export default connect(putReduxStateOnProps)(Review);