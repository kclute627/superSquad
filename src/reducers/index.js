
import { combineReducers } from 'redux';
import characters from './charReducer';
import heros from './herosReducer';



const rootReducer = combineReducers({
    characters,
    heros,

})


export default rootReducer;