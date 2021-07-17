import Row from "./modules/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
