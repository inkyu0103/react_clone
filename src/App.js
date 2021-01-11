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



  // array의 length를 기준으로 합시다!
  nextMovie = () =>{
    // 현재의 idx가 마지막이라면
    if (this.state.movie_idx === this.state.movies.length-1){
      this.setState({movie_idx:0});
    }
    else{
      this.setState(current =>({movie_idx : current.movie_idx+1}));
    }
    
 
  }

  beforeMovie = () =>{
    if (this.state.movie_idx === 0 ){
      this.setState({movie_idx : 19});
    } else{
      this.setState(current =>({movie_idx:current.movie_idx-1}));
    }
  }


  // 처음으로 Mount 했을 때
  componentDidMount(){
    console.log("first render");
    this.getMovies();
  }

  
  componentDidUpdate(){
    console.log("Updated (render)");
  }

  render(){
    const { isLoading ,movies } = this.state
    return(
      <section className="container">
        {isLoading ? (
          <div className="loader">
            
          </div>
          ) : (
            <div className="movies">
              <div class="movies__header"></div>
              <Movie key={movies[this.state.movie_idx].id} year={movies[this.state.movie_idx].year} title={movies[this.state.movie_idx].title} summary={movies[this.state.movie_idx].summary} poster={movies[this.state.movie_idx].medium_cover_image} genres={movies[this.state.movie_idx].genres} id = {movies[this.state.movie_idx].id} /> 
              <div class="buttons">
                <a onClick={this.beforeMovie}><i class="fas fa-chevron-left"></i></a>
                <a onClick={this.nextMovie}><i class="fas fa-chevron-right"></i></a>
              </div>
            </div>
            
            
            )}
          
            </section>
    )
  }
}
export default App;


//render는 왜 ()만 있고...