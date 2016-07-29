import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filter } from '../actions/filterAction';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

   
    render() {
      
        return (
            <input 
            type='search'
            value={this.state.text}
            className='form-control' 
            placeholder='Filter User By Name'
            onChange={(event) =>  {
                this.setState({ text: event.target.value });
                
                var text = event.target.value.toLowerCase().replace(' ', '');
    
                this.props.users.forEach((user) => {
               
                    if (user.name.toLowerCase().indexOf(text) === -1) {
                        this.props.filter(user);
                    }
                 
                });
            }} 
            />
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({filter: filter}, dispatch);
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter);