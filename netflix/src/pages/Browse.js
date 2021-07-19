import React from 'react';
import Row from '../modules/Row';
import requests from '../requests';
import Header from '../modules/Header';

function Browse() {
    return (
        <div>
        <Header />
            <Row 
                title = 'Netflix Originals' 
                url ={requests.netflixOrginals}
            />
            <Row 
                title = 'Trending Now'
                url ={requests.trendingMovies}
            />
            <Row 
                title = 'Top Rated'
                url ={requests.topRated}
            />
            <Row 
                title = 'Action Movies'
                url ={requests.actionMovies}
            />
            <Row 
                title = 'Horror Movies'
                url ={requests.horrorMovies}
            />
        </div>
    )
}

export default Browse
