import characters_json from '../data/characters.json';
import {ADD_CHAR, REMOVE_CHAR} from '../actions/index';



// const initialState = {
//     characters: [...characters_json],
    
// }

const createCharHelper = (id)=>{
    let char = characters_json.find(cur => cur.id === id);
    return char;
}

const characters = (state = characters_json, action)=>{

    switch(action.type){
        case ADD_CHAR:
            let characters = state.filter(cur => cur.id !== action.id);
            return characters
        case REMOVE_CHAR:
            characters =[...state, createCharHelper(action.id)]
            return characters;

        default:
            return state;
    }
} 

export default characters;