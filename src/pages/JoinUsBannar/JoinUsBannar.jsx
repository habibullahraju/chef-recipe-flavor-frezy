import React from 'react';
import { Link } from 'react-router-dom';

const JoinUsBannar = () => {
    return (
        <div className='grid md:grid-cols-2 items-center bg-base-200 px-8 rounded-lg mx-10 my-32 shadow-md'>
            <div>
                <h4 className='mt-2 md:mt-0 font-bold text-orange-300'>JOIN US</h4>
                <h2 className='text-5xl font-bold py-10'>Let's start sharing <br /> your awesome <br /> recipes</h2>
                <Link className='btn bg-[#C59D5F] border-none' to="/login">JOIN NOW</Link>
            </div>
            <div>
                <img src="https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/img_1.png" alt="" />
            </div>
        </div>
    );
};

export default JoinUsBannar;