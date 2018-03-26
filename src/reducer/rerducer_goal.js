import {SET_GOALS} from "../constant";

let goals=[];

export default (state=goals,action)=>{
    switch(action.type){
        case SET_GOALS:
            const {goals} =action;
            return goals;
        default:
            return state;
    }
}