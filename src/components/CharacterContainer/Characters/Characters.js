import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

import {charactersAction} from "../../../redux";
import {Character} from "../Character/Character";
import css from './Characters.module.css'

const Characters = () => {
    const {characters} = useSelector(state => state.characters);
    const dispatch = useDispatch();
    const {state: {ids}} = useLocation();

    useEffect(() => {
        dispatch(charactersAction.getByIds({ids}))
    });

    return (
        <div className={css.Characters}>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};