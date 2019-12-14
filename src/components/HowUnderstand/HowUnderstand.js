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


class HowUnderstand extends Component { 

    state ={
        understand: ''
    }

    //takes user to next page
    //saves how user is understanding material in reducer
    goToHowSupport = ()=>{
        this.props.dispatch({ type: 'UNDERSTAND', payload: this.state });
        this.props.history.push(`/how-support`); 
    }
    
    // Takes user back to previous page
    goBack = () => {
        this.props.history.push(`/`);
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
                        <h2>How well are you understanding the content?</h2>
                    </Typography>
                </CardContent>
                <CardContent>
                    <TextField type="number" onChange={(event)=>this.handleChange(event, 'understand')} label="Enter Number 1-5" className={this.props.classes.textField}  margin="normal"
          variant="outlined"/>
                </CardContent>
                <Button variant="contained" color="secondary" className={this.props.classes.button} onClick={this.goBack}>Back</Button>
                <Button disabled={!this.state.understand} variant="contained" color="primary" className={this.props.classes.button} onClick={this.goToHowSupport}>Next</Button>
            </Card>
        )
    }
}

export default connect()(withStyles(styles)(HowUnderstand));