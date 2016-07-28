import React, { Component } from 'react';
import User from './user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../actions/addUser';
class UserList extends Component {
    
    render() {
        console.log(this.props.users);
        let usersa = this.props.users.map( (user, index) => {
            return <User
                name= { user.name } 
                key= { user.id } 
                index={ index } 
                onRemove={ this.props.onRemove} />;
        });
        
        return (
            <ul className='list-group'>
                {usersa}
            </ul>
        );
        /*return (
            <ul className='list-group'>
               
            </ul>
        );*/
    }
}

/*function mapDispatchToProps(dispatch) {
    return bindActionCreators({addUser: addUser}, dispatch);
}*/

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addUser: addUser}, dispatch);
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);

