import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";


class App extends React.Component{
  state ={
    isLoading : true,
    movies : [],
    movie_idx : 0
  }


   getMovies = async() =>{
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    console.log(movies);    
    this.setState({movies , isLoading:false});
  }


  nextMovie = () =>{
    this.state.movie_idx > 19 ? this.setState({movie_idx : 0}) : this.setState({movie_idx : movie_idx+1})
  }


  // 처음으로 Mount 했을 때
  componentDidMount(){
    this.getMovies();
  }

  


  render(){
    const { isLoading ,movies} = this.state
    return(
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className ="loader__text">Loading. . .</span>
          </div>
          ) : (
            <div className="movies">
              <Movie key={movies[this.state.movie_idx].id} year={movies[this.state.movie_idx].year} title={movies[this.state.movie_idx].title} summary={movies[this.state.movie_idx].summary} poster={movies[this.state.movie_idx].medium_cover_image} genres={movies[this.state.movie_idx].genres} id = {movies[this.state.movie_idx].id} />         
              <button>Before</button>
              <button>After</button>
            </div>
            
            )}
           
            
            </section>
    )
  }
}
export default App;


//render는 왜 ()만 있고...