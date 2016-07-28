import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../actions/addUser';

class NewUser extends Component{
    constructor(props) {
        super(props);

        this.state = {
            userName: ''
        };
    }


    render() {
        return (

            <div className='clearfix'>
                <div className='input-group'>
                    <input 
                        value={ this.state.userName }
                        onChange={ (event) => this.setState({ userName: event.target.value }) }
                        type='text' 
                        className='form-control' 
                        placeholder='Username' 
                    />
                </div>

                <button 
                    type='button' 
                    className='btn btn-success'
                    onClick={ () => {
                        this.props.addUser({ 
                            name: this.state.userName, 
                            id: Math.floor(Math.random() * 100000) /* id */
                        });
                    }}
                >Add</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addUser: addUser}, dispatch);
}

function mapStateToProps(state) {
    return {
        users: state
    };
}


export default connect(null, mapDispatchToProps)(NewUser);