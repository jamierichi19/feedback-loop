import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class Admin extends Component { 

    state = {
        feedback: []
    }

    componentDidMount(){
        this.getFeedback();
    }

    //axios GETs all the feedback data
    getFeedback = () => {
        axios.get('/feedback')
        .then( response => {
            console.log('back from server get:', response.data);
            this.setState( { feedback: response.data } );
        }).catch( error => {
            alert('Could not get feedback from server.');
            console.log('error getting feedback', error);
        })
    }

    //axios DELETEs feedback data for specific row
    clickDeleteHandler( reviewId ){
        console.log( 'in clickDeleteHandler', reviewId );
        axios({
          method: 'DELETE',
          url: `/feedback/${ reviewId }`
        }).then((response)=>{
          this.getFeedback();
        }).catch( ( error )=>{
          //catch any errors
          alert('error deleting feedback. see console');
          console.log( error ); 
        })//end axios call
      }// end clickDeleteHandler
    
    render(){
        const feedbackElements = this.state.feedback.map( (feedback, index)=>{
            return <TableRow key={index}>
              <TableCell>{feedback.feeling}</TableCell>
              <TableCell>{feedback.understanding}</TableCell>
              <TableCell>{feedback.support}</TableCell>
              <TableCell>{feedback.comments}</TableCell>
              <TableCell><Button variant="contained" color="secondary" className={this.props.classes.button} 
                onClick={  ()=>this.clickDeleteHandler( feedback.id ) }><DeleteIcon className={this.props.classes.leftIcon} />Delete</Button></TableCell>
            </TableRow>
          })//end feedbackElements

        return(
            
            <Paper className={this.props.classes.root}>
            <Table className={this.props.classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Feeling</TableCell>
                        <TableCell>Comprehension</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {feedbackElements}
                </TableBody>
            </Table>
            </Paper>
            
        )
    }
}

export default connect()(withStyles(styles)(Admin));