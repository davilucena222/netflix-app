import React from "react";
import CardSlider from "./CardSlider";

export default React.memo(function Slider({ movies }) {
    const getMoviesFromRange = (from, to) => {
      return movies.slice(from, to);
    };

    return (
      <div>
        <CardSlider title="Trending now" data={getMoviesFromRange(0, 10)} />
        <CardSlider title="New releases" data={getMoviesFromRange(10, 20)} />
        <CardSlider title="Blockbuster movies" data={getMoviesFromRange(20, 30)} />
        <CardSlider title="Popular on netflix" data={getMoviesFromRange(30, 40)} />
        <CardSlider title="Action movies" data={getMoviesFromRange(40, 50)} />
        <CardSlider title="Epics" data={getMoviesFromRange(50, 60)} />
      </div>
    )
  }
)