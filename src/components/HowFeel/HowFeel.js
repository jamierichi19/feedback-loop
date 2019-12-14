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

class HowFeel extends Component { 

    state ={
        feeling: ''
    }

    //takes user to next page
    //saves how user is feeling in reducer
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
            <Card className={this.props.classes.card}>
                <CardContent>
                    <Typography className={this.props.classes.title} color="textSecondary" gutterBottom>
                        <h2>How Are You Feeling?</h2>
                    </Typography>
                </CardContent>
                <CardContent>
                <TextField type="number" onChange={(event)=>this.handleChange(event, 'feeling')} label="Enter Number 1-5" className={this.props.classes.textField}  margin="normal"
          variant="outlined"/>
                </CardContent>
                <Button disabled={!this.state.feeling} variant="contained" color="primary" className={this.props.classes.button} onClick={this.goToHowUnderstand}>Next</Button>
            </Card>
        )
    }
}



export default connect()(withStyles(styles)(HowFeel));

