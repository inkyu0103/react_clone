import React from "react";
import PropTypes from "prop-types";


function Movie({year,title,summary,poster,genres}){
    
    // 이 부분을 함수로 빼는 것이 좋나요?
    if (summary.length >100){
        summary = summary.slice(0,100) + ". . .";
    }

    return <div className="movie">
        <div class="movie__poster">
            <img src={poster} alt={title} title={title}/>
        </div>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="genres">{genres.map((genre,index) => (
                <li key ={index} className="genres__genre">{genre}</li>
            ))}</ul>
            <p className="movie__summary">{summary}</p>
           
        </div>
    </div>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title :PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;