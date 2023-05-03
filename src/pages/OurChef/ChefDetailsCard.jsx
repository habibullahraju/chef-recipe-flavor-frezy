import React, { useState } from "react";
import Rating from "react-rating";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegStar, FaStar ,FaStarHalf  } from "react-icons/fa";

const ChefDetailsCard = ({card}) => {
    const {recipeName,ingredients,cookingMethod,rating} = card;

    const handleAddToFavoriteBtn = (e)=>{
      toast(' Wow! Added Your Favorite Recipes.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        e.target.disabled = true;
      
    }
  

  return (
    <div className="mx-auto my-10">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title font-semibold">{recipeName}</h2>
          <p> <span className="font-semibold">Ingredients:</span>{
              ingredients.map((ingre,idx) => <li
               key={idx}
              >{ingre}</li>)
            }</p>
            <p> <span className="font-semibold">Cooking Method:</span>{cookingMethod}</p>
            <p className="flex items-center gap-2"> <span className="font-semibold">Ratings:</span> <span className="mt-1">
            <Rating
               placeholderRating={rating}
               emptySymbol={<FaRegStar></FaRegStar>}
               placeholderSymbol={<FaStar></FaStar>}
               fullSymbol={<FaStar></FaStar>}
               readonly
            >

            </Rating></span></p>
           
          <div className="card-actions justify-end">
            <button disabled={false} onClick={handleAddToFavoriteBtn} className="btn bg-[#C59D5F] border-none">Add to Favorite</button>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetailsCard;
