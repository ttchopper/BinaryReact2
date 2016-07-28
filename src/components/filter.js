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
        this.filter = this.filter.bind(this);
    }
    filter(event) {
        this.setState({ text: event.target.value });
        let text = this.state.text.toLowerCase().split('');
        text.forEach((letter) => {
            this.props.filter(letter);
        });
    }
    render() {
        return (
            <input 
            type='search'
            value={this.state.text}
            onChange={(event) => this.filter(event)} 
            />
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({filter: filter}, dispatch);
}

/*function mapStateToProps(state) {
    return {
        users: state
    };
}*/


export default connect(null, mapDispatchToProps)(Filter);