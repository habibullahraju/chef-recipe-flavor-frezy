import React from "react";

const ChefDetailsCard = ({card}) => {
    const {recipeName,ingredients,cookingMethod,rating} = card;
  return (
    <div className="mx-auto my-10">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">{recipeName}</h2>
          <p>{
              ingredients.map((ingre,idx) => <li
               key={idx}
              >{ingre}</li>)
            }</p>
            <p>{cookingMethod}</p>
            <p>Ratings: <span className="text-orange-400">{rating}</span></p>
          <div className="card-actions justify-end">
            <button className="btn">Add to Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetailsCard;
