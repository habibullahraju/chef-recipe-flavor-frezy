import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({chef}) => {
    const {id, chefPicture,chefName, yearsOfExperience, numberOfRecipes, likes} = chef;
    return (
        <div className='mx-auto'>
            <div className="card w-100 bg-base-100 shadow-xl">
  <figure className='h-[350px] w-full object-cover'><LazyLoad>
  <img className='' src={chefPicture} alt="Shoes" />
    </LazyLoad></figure>
  <div className="card-body">
    <h2 className="card-title">{chefName}</h2>
    <p className='m-0'>Experience: {yearsOfExperience} years</p>
    <p>Recipes: {numberOfRecipes}</p>
    <p className='flex items-center gap-3'><span><FaThumbsUp></FaThumbsUp></span><span>{likes}</span></p>
    <div className="card-actions justify-end">
      <Link to={`/all-chef/${id}`}  className="btn border-none bg-[#C59D5F]">View Recipe</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefCard;