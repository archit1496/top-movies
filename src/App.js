import React from 'react';
import './App.css';
import MovieCard from './components/MovieCard'
import AppHeader from './components/AppBar';
import MovieDialog from './components/Dailog'
class App extends React.Component {
  state = { movie: [], selectedMovie: null, searchText: '' };
  selectmovie = (movie) => {
    debugger
    this.setState({ selectedMovie: movie })
    console.log(this.state);
  };
  search = (e) => {
    console.log("search", e.target.value);
  }
  searchTextChanged = async (e) => {
    //if (this.state) {
      this.setState({ searchText: e.target.value });
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=e7cd2b3e9a7681f1cebd652523102c58&query=${this.state.searchText}`
      );

      const json = await response.json();
      if(json.results)
      this.setState({ movie: json.results });
      // if(json.results)
      // {
      //   console.log("inside");
      //   debugger
      
      // console.log(this.state)
      // }
    //}
  }
  // console.log("state",this.state);
clearmovie = () => { this.setState({ selectedMovie: null }) };
async componentDidMount() {
  let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=e7cd2b3e9a7681f1cebd652523102c58&language=en-US&page=1`)
  const json = await response.json();
  this.setState({ movie: json.results })
}
render() {
  const { movie, selectedMovie, searchText } = this.state;
  return (
    <div>
      <AppHeader search={this.search} searchTextChanged={this.searchTextChanged}></AppHeader>
      <div className="App">

        {movie.map(elm => < MovieCard key={elm.id} movie={elm} selectmovie={this.selectmovie} />)}
      </div>
      <MovieDialog movie={selectedMovie} handleClose={this.clearmovie} />
    </div>
  );
}
}

export default App;
