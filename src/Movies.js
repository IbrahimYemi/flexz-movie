import React, { useState } from 'react';
import { Modal, show, Button } from 'react-bootstrap';

export default function Movies() {
  const [movieData, setMovieData] = React.useState([]);
  const [current, setCurrent] = useState(1);

  const API_KEY = 'api_key=282292c1d01116b3d3ccf1c8c40cf303';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_URL =
    BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
  const searchURL = BASE_URL + '/search/movie?' + API_KEY;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const Utube = `=`;

  React.useEffect(function () {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovieData(data.results));
  }, []);
  console.log(movieData);
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState({});
  const handleShow = (item) => {
    setActiveItem(item);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const cards = movieData.map((item) => {
    const mystyle1 = {
      color: 'red',
    };
    const mystyle2 = {
      color: 'orange',
    };
    const mystyle = item.vote_average < 7 ? mystyle1 : mystyle2;
    return (
      <div key={item.id} className="card-container">
        <div className="card">
          <img src={IMG_URL + item.poster_path} alt={item.title} />
          <div className="title-rating">
            <h3 className="title">{item.title}</h3>
            <span className="rating" style={mystyle}>
              {item.vote_average}
            </span>
          </div>
          <div className="release">{item.release_date}</div>
          <div className="review">
            <button onClick={() => handleShow(item)}>See More</button>
          </div>
        </div>
        {show && (
          <div className="modal">
            <img
              src={IMG_URL + activeItem.poster_path}
              alt={activeItem.title}
            />
            <h3>{activeItem.title}</h3>
            <h4>
              Rating: {activeItem.vote_average}
              <h5>Release Date: {activeItem.release_date}</h5>
              <br></br>
              <h5>Overview</h5>
              <p>{activeItem.overview}</p>{' '}
            </h4>
            <button onClick={handleClose}>CLOSE</button>
          </div>
        )}
      </div>
    );
  });

  const not_found = (
    <div style={{ textAlign: 'center', color: 'red', fontSize: '20px' }}>
      NO MOVIE IS AVAILABLE, CHECK YOUR NETWORK AND TRY AGAIN
    </div>
  );
  return (
    <>
      <div className="card-holder">
        {!movieData.lenght > 0 ? cards : not_found}
      </div>
    </>
  );
}
