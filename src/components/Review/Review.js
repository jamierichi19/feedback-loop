import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component { 

    //takes user to next page
    //axios to post data to database
    goToSuccess = ()=>{
        let newFeedback = {
            feeling: this.props.Feelings,
            understanding: this.props.Understandings,
            support: this.props.Support,
            comments: this.props.Comments
        }
        axios.post('/feedback', newFeedback)
      .then(response => {
       console.log(response)
       this.props.history.push(`/success`);
      })
      .catch( error => {
        console.log(`Error adding feedback`, error);
        alert(`Could not add feedback at this time. Please try again later.`);
      })
    }

    // Takes user to the previous page
    goBack = () => {
        this.props.history.push(`/comments`);
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
                <button onClick={this.goBack}>Back</button>
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