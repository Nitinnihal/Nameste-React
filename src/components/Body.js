import RestaurentCard from "./RestaurentCard";
// import resList from "../utils/mockData";

const Body = () => {
  let listOfRestaurent = [
    {
      data: {
        id: "687246",
        name: "Aubree",
        area: "Rajarajeshwari Nagar",
        cloudinaryImageId: "6a7973d432c533933de71326a0a3dde9",
        cuisines: ["Desserts", "Bakery"],
        costForTwo: 80000,
        deliveryTime: 24,
        avgRating: "4.1",
      },
    },
    {
      data: {
        id: "687247",
        name: "ABC",
        area: "Rajarajeshwari Nagar",
        cloudinaryImageId: "6a7973d432c533933de71326a0a3dde9",
        cuisines: ["Desserts", "Bakery"],
        costForTwo: 80000,
        deliveryTime: 24,
        avgRating: "3.9",
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurent = listOfRestaurent.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(listOfRestaurent);
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
