import React from "react";
import movieList from "../data.json";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      activeIndex: 0,
    };
  }
  handleModal = (index) => {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible,
      };
    });
    this.setState({
      activeIndex: index,
    });
  };
  render() {
    return (
      <>
        <ul className="movie-list">
          {movieList.map((movie, index) => (
            <li key={movie.Title} className="relative">
              <img src={movie.Poster} alt="" width="260" />
              <h2>{movie.Title}</h2>
              <h4>{movie.Released}</h4>
              <button onClick={() => this.handleModal(index)} className="btn">
                More Info
              </button>
            </li>
          ))}
        </ul>
        {this.state.isVisible ? (
          <MovieInfo
            moreInfo={movieList[this.state.activeIndex]}
            handleModal={this.handleModal}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default MovieList;

function MovieInfo(props) {
  let info = props.moreInfo;
  return (
    <div className="modal">
      <div className="modal-body">
        <header className="flex">
          <h2>Movie Info</h2>
          <button onClick={props.handleModal} className="cross">
            X
          </button>
        </header>
        <article>
          <h3>{info.Title}</h3>
          <h4>{info.Year}</h4>
          <h5>{info.Rated}</h5>
          <h6>{info.Released}</h6>
          <strong>{info.Runtime}</strong>
          <strong>{info.Genre}</strong>
          <strong>{info.Director}</strong>
          <strong>{info.Writer}</strong>
          <h3>{info.Actors}</h3>
          <p>{info.Plot}</p>
          <strong>{info.Language}</strong>
          <figure>
            {info.Images.map((img) => (
              <img src={img} alt="" width="200" />
            ))}
          </figure>
        </article>
      </div>
    </div>
  );
}
