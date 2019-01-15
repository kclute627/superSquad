import {ADD_CHAR, REMOVE_CHAR} from '../actions/index';
import characters_json from '../data/characters.json'


const createCharHelper = (id)=>{
    let char = characters_json.find(cur => cur.id === id);
    return char;
}


const initialState = {
    heros: [],
}

const heros = (state = initialState, action) => {

    switch(action.type){
        case ADD_CHAR: 
            let heros =  createCharHelper(action.id) ;
            return {
                ...state,
                heros: [...state.heros, heros]
            }
        case REMOVE_CHAR:
            heros = state.heros.filter(cur => cur.id !== action.id);
            return {
                ...state,
                heros, 
            };
        default:
        return state;
    }

}


export default heros;