import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import {Router,Route,browserHistory} from 'react-router';
import {firebaseApp} from './firebase';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer/index';
import {logUser} from "./actions/index";

const store=createStore(reducer)

firebaseApp.auth().onAuthStateChanged(user=>{
    if(user){
        console.log('user has signed in or up');
        const {email}= user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    }
    else{
        console.log('user has signout or still need to sign in');
        browserHistory.replace('/signin');
    }
})

ReactDom.render(
    <Provider store={store}>
        <Router path='/' history={browserHistory}>
            <Route path='/app' component={App}></Route>
            <Route path='/signin' component={SignIn}></Route>
            <Route path='/signup' component={SignUp}></Route>
        </Router>
    </Provider>
    ,document.getElementById('root')
);