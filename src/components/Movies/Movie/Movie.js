import React from 'react';

const Movie = ({movie}) => {
    const {poster_path, title, release_date, vote_average} = movie;

    return (
        <div>
            <img src={poster_path} alt="poster_path"/>
            <div>{title}</div>
            <div>Release date: {release_date}</div>
            <div>Vote average: {vote_average}</div>
        </div>
    );
};

export {Movie};