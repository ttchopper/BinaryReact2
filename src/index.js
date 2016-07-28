import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewUser from './components/new_user';
import UserList from './components/user_list';
import Filter from './components/filter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers/index';


const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

class App extends Component {
   /* constructor(props) {
        super(props);

        this.state = { 
            users: [] 
        };
    }*/

    

/*add User on Click Button
    addUser(user) { 
        this.setState({ 
            users: this.state.users.concat(user) 
        });
    }

     remove User on Click Button
    removeUser(userToRemove) {
        this.setState({ 
            users: this.state.users.filter((_, user) => {
                return userToRemove !== user;
            }) 
        });
    }*/

   
    render() {
        return (
            <div>
                <NewUser />
                <Filter />
                <UserList />
            </div>
        );
    }
}



ReactDOM.render( <Provider store={ store }>
                    <App /> 
                 </Provider>, document.querySelector('.container'));
