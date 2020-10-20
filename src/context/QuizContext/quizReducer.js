/** @jsx jsx */
import { NAME_COMPLETED, ANSWER_DONE, HIDE_STEP, NUMBER_STEPS } from '../../types/index';

const Reducer = (state, action) => {
    switch(action.type) {

        case NUMBER_STEPS:
            return {
                ...state,
                step: state.step - action.payload,
                totalSteps: state.totalSteps - action.payload
            }

        case HIDE_STEP:
            return {
                ...state,
                hide: true
            }
        
        case NAME_COMPLETED:
            return {
                ...state,
                name: action.payload,
                step: (state.step + 1)
            }

        case ANSWER_DONE:
            return {
                ...state,
                points: (state.points + action.payload),
                step: (state.step + 1),
                hide: false
            }   
        

        default:
            return state;
    }
}
 
export default Reducer;