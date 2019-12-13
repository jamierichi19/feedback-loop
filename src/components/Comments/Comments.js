import React, { Component } from 'react';

class Comments extends Component { 

    goToReview = ()=>{
        this.props.history.push(`/review`);
    }

    render(){
        return(
            <div>
                <h2>Any comments you want to leave?</h2>
                <input type="text"></input>
                <button onClick={this.goToReview}>Next</button>
            </div>
        )
    }

}

export default Comments;