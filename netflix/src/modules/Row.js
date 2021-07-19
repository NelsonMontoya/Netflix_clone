import React, {useState, useEffect} from 'react';
import axios from '../axioss';
import '../modules/Row.css';

//base url to obtain the image corresponding to the series or movie
const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({title, url}) {
    /*Initially there are not movies in the state */
    const [data, setData] = useState([]);

    useEffect(()=>{
        // if [], run once the Row loads, and don't run again
        async function getMovies(){
            const response = await axios.get(url);
            setData(response.data.results);
            return response;
        }

        getMovies();

    },[url]); // if url changes, and it does because the url is not the same for every genre


    console.log(data);
    return (
        <div className = "row">
            <h2>{title}</h2>
            <div className="row_posters">
                {data.map(movie=>(
                    <img
                        key = {movie.id}
                        className = "movie_picture"
                        src = {`${base_url}${movie.poster_path}`}
                        alt = {movie.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
