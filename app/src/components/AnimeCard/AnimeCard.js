import React from "react";
import "./AnimeCard.css";

export default class AnimeCard extends React.Component {

    render() {
      return (
        <div className="anime-card">
          <div className="anime-content">
            <img className="anime-image" 
                 src = {this.props.anime.image}
                 alt = {this.props.anime.title}
                 />
            <h1 className="anime-title">{this.props.anime.title}</h1>
          </div>
        </div>
      );
    }
  }