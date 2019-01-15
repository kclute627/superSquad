export const ADD_CHAR = 'ADD_CHAR';
export const REMOVE_CHAR = 'REMOVE_CHAR';


export const addCharacterById = (id) => {

    const action = {
        type: ADD_CHAR,
        id,
    }
    return action;
} 
