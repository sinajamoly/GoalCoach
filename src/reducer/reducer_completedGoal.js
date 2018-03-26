import {SET_COMPLETED} from "../constant";

let completeGoal=[];

export default (state=completeGoal,action)=>{
    switch(action.type){
        case SET_COMPLETED:
            const {completeGoals} =action;
            console.log('reducer',completeGoals)
            return completeGoals;
        default:
            return state;
    }
}