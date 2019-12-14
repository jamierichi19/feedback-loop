import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const styles = theme => ({
    card: {
        minWidth: 275,
      },
    button: {
        margin: theme.spacing.unit,
    }
  });


class Success extends Component { 

    //takes user back to the beginning
    goToHowFeel = ()=>{
        this.props.history.push(`/`);
    }
    
    render(){
        return(
            <Card>
                <h1>Success</h1>
                <h2>Thank You For Completing Feedback!</h2>
                <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.goToHowFeel}>Leave New Feedback</Button>
            </Card>
            
        )
    }
}


export default withStyles(styles)(Success);