import {combineReducers} from 'redux';
import user from './reducer_user';
import goals from './rerducer_goal';
import completeGoals from './reducer_completedGoal';

export default combineReducers({
   user,
   goals,
   completeGoals
});