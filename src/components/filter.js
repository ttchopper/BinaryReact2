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
        // this.filter = this.filter.bind(this);
    }

   
    render() {
       /* filter(event) {
        this.setState({ text: event.target.value });
        let text = this.state.text.toLowerCase().split('');
        console.log(this.props.users);
        this.props.users.forEach((user) => {
            if (user.name.indexOf(text) !== -1) {
                this.props.filteru(user);
            }
        });
    }*/
        // console.log(this.props.users);
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
                    // this.props.filter(user);
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