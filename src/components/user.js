import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class User extends Component {
    

    render() {
        return (
            <div className='list'>
              <li className='list-group-item'>{ this.props.name } </li>
                <button 
                    type='button' 
                    className='btn btn-danger' 
                    onClick={() => this.props.onRemove(this.props.index) }
                >Remove</button>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(User);