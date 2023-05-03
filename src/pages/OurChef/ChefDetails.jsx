import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaThumbsUp, FaBriefcase, FaUtensils  } from "react-icons/fa";
import ChefDetailsCard from './ChefDetailsCard';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const {id, chefPicture,chefName, shortDescription,yearsOfExperience, numberOfRecipes, likes, cards} = chefDetails;
    return (
        <div>
            <div className='bg-black relative'>
                <img className='w-full opacity-30 h-96 object-cover' src="https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <div className='absolute top-[45%] md:left-[20%] text-white text-center text-6xl font-bold '>
                    <h2>Meet Our Talented Chefs!</h2>
                </div>
            </div>
            <div className='flex gap-4 items-center border bg-base-200'>
                <div className='flex-grow'>
                <img className='w-[400px] h-[350px] rounded-md border object-cover ' src={chefPicture} alt="" />
                </div>
                <div>
                    <h2 className='text-4xl font-bold mb-4'>{chefName}</h2>
                    <p className='text-gray-600 text-lg mb-2'> <span className='font-semibold'>Description: </span>{shortDescription}</p>
                    <p className='text-lg font-semibold text-gray-600 flex items-center gap-2'><FaUtensils></FaUtensils> Recipes: {numberOfRecipes}</p>
                    <p  className='text-lg font-semibold text-gray-600 py-1 flex items-center gap-2'> <FaBriefcase></FaBriefcase> Experience: {yearsOfExperience} Years</p>
                    <p className='text-gray-600 flex items-center gap-3 text-lg font-semibold'><span><FaThumbsUp></FaThumbsUp></span> <span>{likes}</span></p>
                </div>
            </div>
            <div className='grid md:grid-cols-3 text-gray-600 '>
                {
                    cards.map((card,idx)=> <ChefDetailsCard
                      card={card}
                      key={idx}
                    ></ChefDetailsCard>)
                }
  
            </div>
        </div>
    );
};

export default ChefDetails;