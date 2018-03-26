import React,{Component} from 'react';
import {completeGoalRef} from '../firebase';
import {connect} from 'react-redux';
import {setCompleted} from "../actions/index";

class CompleteGoalList extends Component{
    componentDidMount(){
        completeGoalRef.on('value',snap=>{
            let CompleteGoals=[];
            snap.forEach(CompleteGoal=>{
                const {email,title}=CompleteGoal.val();
                CompleteGoals.push({email,title})
            })
            //console.log('completeGoals',CompleteGoals);
            this.props.setCompleted(CompleteGoals);
        })
    }
    render(){
        return(
            <div>
                {this.props.completeGoals.map((completeGoal,index)=>{
                    const {title,email}=completeGoal;
                    return(
                        <div key={index}>
                            <strong>{title}</strong> Completed By <em>{email}</em>
                        </div>
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {completeGoals}=state;
    return{
        completeGoals
    }
}

export default connect(mapStateToProps,{setCompleted})(CompleteGoalList);