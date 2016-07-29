import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewUser from './components/new_user';
import UserList from './components/user_list';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers/index';


const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

class App extends Component {

    render() {
        return (
            <div>
                <NewUser />
                <UserList />
            </div>
        );
    }
}


ReactDOM.render( <Provider store={ store }>
                    <App /> 
                 </Provider>, document.querySelector('.container'));
