import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./About.css";

function About() {
  return (
    <div>
      <div className="about-container">
        <div className="about-us-text-center">
          <h1 className="about-title">
            <Link to="/about">About Us</Link>
          </h1>
          <p className="about-text">
            MovieHub is a platform that helps you discover new movies and series based on your interests. You can keep track of your favorite movies, mark what you've watched, and rate your favorites.
          </p>
        </div>

        {/* Section 1 - Image Left, Text Right */}
        <div className="about-section">
          <img src="pictures/movie-watching.jpg" alt="Movie Experience" className="about-image" />
          <div className="about-text-container">
            <h2 className="about-title">
              <Link to="/browse-movies">Discover New Movies</Link>
            </h2>
            <p className="about-text">
              MovieHub helps you explore trending movies and series based on your interests.
            </p>
          </div>
        </div>

        {/* Section 2 - Text Left, Image Right */}
        <div className="about-section reverse">
          <div className="about-text-container">
            <h2 className="about-title">
              <Link to="/create-list">Track What You Watch</Link>
            </h2>
            <p className="about-text">
              Keep track of your favorite movies, mark what you've watched, and rate your favorites.
            </p>
          </div>
          <img src="pictures/movie-tracking.jpg" alt="Tracking Movies" className="about-image" />
        </div>
        

        <div className="about-section">
          <img src="pictures/tmdb-logo.svg" alt="tmdb-logo" className="about-image" />
          <div className="about-text-container">
            <h2 className="about-title">
              <Link to="https://developer.themoviedb.org/docs/getting-started">Our API provider</Link>
            </h2>
            <p className="about-text">
              MovieHub uses the TMDB API but is not endorsed or certified by TMDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
