import React from 'react';

export default class Form extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {movies: []}
    this.fetchMovies = this.fetchMovies.bind(this)	    
  }

  componentDidMount() {
    this.interval = setInterval(this.fetchMovies, 5 * 1000)	 
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  fetchMovies() {
    fetch("/movies.json").
    then((response) => response.json()).
    then((movies)=> {
       this.setState({movies});
    })
  }

  render() {
    return (	 
    <div>		    
      <ul>
      {this.state.movies.map(movie => <li key={movie.id}> {movie.title} - {movie.rating} </li>)} 
      </ul>	
    </div>
    );
  }
}
