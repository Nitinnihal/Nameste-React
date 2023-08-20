import { CDN_URL } from "../utils/constants";

const RestaurentCard = (Props) => {
  const { resData } = Props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + resData.data.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} For Two</h4>
      <h4>{deliveryTime} Min</h4>
    </div>
  );
};


export default RestaurentCard;