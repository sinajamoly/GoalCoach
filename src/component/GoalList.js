import React,{Component} from 'react';
import {goalRef} from "../firebase";
import {setGoals} from "../actions/index";
import {connect} from 'react-redux';
import GoalItem from './goalItem';

class GoalList extends Component{
    componentDidMount(){
        goalRef.on('value',snap=>{
            let goals=[];
            snap.forEach(goal=>{
                const {email,title}=goal.val();
                const serverKey=goal.key;
                goals.push({email,title, serverKey});
            })
            //console.log('goals',goals);
            this.props.setGoals(goals);
        })
    }

    render(){
        const goals=this.props.goals.map(goal=>{
            return(
                    <GoalItem goal={goal}/>
            );
        });
        return(
            <div className="">
                <ul>
                    {goals}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {goals}=state;
    return{
        goals
    }
}
export default connect(mapStateToProps,{setGoals})(GoalList);