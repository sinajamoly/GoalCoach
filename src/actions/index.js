import {SIGNED_IN} from '../constant';
import {SET_GOALS} from "../constant";
import {SET_COMPLETED} from "../constant";

export function logUser(email){
    const action={
        type: SIGNED_IN,
        email
    }
    return action;
}

export function setGoals(goals){
    const action={
        type: SET_GOALS,
        goals
    }
    return action;
}

export function setCompleted(completeGoals){
    const action={
        type: SET_COMPLETED,
        completeGoals
    }
    return action;
}