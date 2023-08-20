import {charactersActionsTypes} from "../actions";

const initialState = {
    characters: []
};

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case charactersActionsTypes.SETC:
            return {...state, characters: action.payload}
        default:
            return state
    }
};

export {characterReducer};
