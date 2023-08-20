import {combineReducers, createStore} from "redux";

import {characterReducer, episodesReducer} from "./reducers";


const rootReducer = combineReducers ({
    episodes: episodesReducer,
    characters: characterReducer
});

const store = createStore(rootReducer);

export {store};
