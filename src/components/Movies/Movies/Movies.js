import React, {useEffect, useState} from 'react';

import {Movie} from "../Movie/Movie";
import {movieService} from "../../../services";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll().then(({data}) => setMovies(data))
    }, [])

    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};