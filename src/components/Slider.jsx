import React from "react";
import CardSlider from "./CardSlider";

function Slider({ movies }) {
  const title = [
    "Recently Updated",
    "Popular On Netflix",
    "Trending Now",
    "Blockbuster Movies",
    "Action",
    "Epic",
  ];
  const getMoviesFromRange = (index) => {
    return movies?.slice(index * 10, (index + 1) * 10);
  };
  return (
    <div>
      {movies?.length &&
        title?.map((title, index) => {
          return <CardSlider title={title} data={getMoviesFromRange(index)} />;
        })}
    </div>
  );
}

export default Slider;
