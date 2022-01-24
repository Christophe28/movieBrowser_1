import React from 'react';

const IMAGES_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8) {
        return 'green';
    } else if (vote >= 6) {
        return "orange";
    } else {
        return 'red';
    }
}

const Movies = ({ title, poster_path, overview, vote_average}) => {
    return (
        <div className="movie">
            <img src={poster_path ? (IMAGES_API + poster_path) : 'https://audiovisuel.cfwb.be/fileadmin/sites/sgam/uploads/Actualites/Aventure-jai-cinema.jpg'} alt={title}/>
            <div className="movie_info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            
            <div className='movie_over'>
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export default Movies;