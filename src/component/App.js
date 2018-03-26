import React,{Component} from 'react';
import {firebaseApp} from "../firebase";
import {connect} from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
class App extends Component{

    signOut(){
        firebaseApp.auth().signOut();
    }

    render(){
        return(
            <div className="container">
                <h3>Goals</h3>
                <div><AddGoal/></div>
                <hr/>
                <h4>Goals</h4>
                <div><GoalList/></div>
                <hr/>
                <div><CompleteGoalList/></div>
                <button
                    className='btn btn-danger'
                    onClick={()=>this.signOut()}
                >
                    Sign Out
                </button>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log('state',state)
}
export default connect(mapStateToProps,null)(App);