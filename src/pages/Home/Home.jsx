import React from 'react';
import OurChef from '../OurChef/OurChef';
import JoinUsBannar from '../JoinUsBannar/JoinUsBannar';
import MessageBanner from '../MessageBanner/MessageBanner';


const Home = () => {
    return (
       <div>
         <div className='relative bg-black text-center'>
            <img className='w-full  bg-cover object-cover opacity-30' src="https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80" alt="" />
            <div className='absolute top-0 md:top-[30%] text-white '>
                <h2 className='text-5xl md:text-7xl font-bold text-center p-4'>Best Ever <span className='text-[#C59D5F]'>Recipes for Food</span></h2>
                <p className='md:px-36 mb-4'>Lasagna - An Chines dish made of stacked layers of wide pasta, ground meat, tomato sauce, and cheese, baked until golden and bubbly. Satisfying, hearty, and perfect for a cozy family dinner.</p>
                <button className='btn bg-[#C59D5F]'>Make Reservation</button>
            </div>
        </div>
        <OurChef></OurChef>
        <JoinUsBannar></JoinUsBannar>
        <MessageBanner></MessageBanner>

       </div>
    );
};

export default Home;