import React from 'react';
import '../style/MovieDetailsModal.css';

const MovieDetailsModal = ({ movie, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className='details-modal-header'>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
          <h2>{movie.Title}</h2>
        </div>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
