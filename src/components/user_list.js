import React, { Component } from 'react';
import User from './user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../actions/addUser';
class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)});
    }
    render() {
        let filteredUsers = this.props.users.filter((user) => {
            return user.name.indexOf(this.state.search) !== -1;
        });

        let users = filteredUsers.filter( (user, index) => {
            return user.filtered === false;
        }).map((user, index) => {
            return <User
                name= { user.name } 
                key= { user.id } 
                index={ index } 
                onRemove={ this.props.onRemove} />;
        });
        
        return (
            <div className='list'>
            <input type='text'
            value = {this.state.search}
            placeholder = 'Filter By UserName' 
            onChange={ this.updateSearch.bind(this)}
            className='form-control' 
            />
            <ul className='list-group'>
                {users}
            </ul>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({addUser: addUser}, dispatch);
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);

