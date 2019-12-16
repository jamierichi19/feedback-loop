import React, { Component } from 'react';
import {connect} from 'react-redux';

class Admin extends Component { 
    render(){
        return(
            <p>Hello</p>
        )
    }
}

export default connect()(Admin);