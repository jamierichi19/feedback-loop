import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    button: {
        margin: theme.spacing.unit,
    },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
  });

class Review extends Component { 

    //takes user to next page
    //axios to post data to database
    goToSuccess = () =>{
        let newFeedback = {
            feeling: this.props.feelings,
            understanding: this.props.understandings,
            support: this.props.support,
            comments: this.props.comments
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
            <Card>
                <CardContent>
                    <Typography className={this.props.classes.title} color="textSecondary" gutterBottom>
                        <h2>Review Your Feedback!</h2>
                        <p>Feelings: {this.props.feelings}</p>
                        <p>Understandings: {this.props.understandings}</p>
                        <p>Support: {this.props.support}</p>
                        <p>Comments: {this.props.comments}</p>
                        </Typography>
                </CardContent>
                <Button variant="contained" color="secondary" className={this.props.classes.button} onClick={this.goBack}>Back</Button>
                <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.goToSuccess}>Submit</Button>
            </Card>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    feelings: reduxState.feelingReducer.feeling,
    understandings: reduxState.understandReducer.understand,
    support: reduxState.supportedReducer.supported,
    comments: reduxState.commentReducer.comments
})

export default connect(putReduxStateOnProps)(withStyles(styles)(Review));