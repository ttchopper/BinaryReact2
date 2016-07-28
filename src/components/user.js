import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeUser } from '../actions/removeUser';
class User extends Component {
    

    render() {
        return (
            <div className='list'>
              <li className='list-group-item'>{ this.props.name } </li>
                <button 
                    type='button' 
                    className='btn btn-danger' 
                    onClick={() => this.props.removeUser(this.props.index) }
                >Remove</button>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeUser: removeUser }, dispatch);
}



export default connect(null, mapDispatchToProps)(User);