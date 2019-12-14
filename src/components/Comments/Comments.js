import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


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

    // Takes user back to previous page
    goBack = () => {
        this.props.history.push(`/how-support`);
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
            <Card className={this.props.classes.card}>
                 <CardContent>
                    <Typography className={this.props.classes.title} color="textSecondary" gutterBottom>
                        <h2>Any comments you want to leave?</h2>
                    </Typography>
                </CardContent>
                <CardContent>
                    <TextField type="text" onChange={(event)=>this.handleChange(event, 'comments')} label="Enter any Comments" className={this.props.classes.textField}  margin="normal"
          variant="outlined"/>
                </CardContent>
                <Button variant="contained" color="secondary" className={this.props.classes.button} onClick={this.goBack}>Back</Button>
                <Button disabled={!this.state.comments} variant="contained" color="primary" className={this.props.classes.button} onClick={this.goToReview}>Next</Button>
            </Card>
        )
    }

}

export default connect()(withStyles(styles)(Comments));