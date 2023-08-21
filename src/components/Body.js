import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurent, setlistOfRestaurent] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurent(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurent.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
