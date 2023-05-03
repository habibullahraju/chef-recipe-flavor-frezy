import React, { useRef } from 'react';
import ReactPrint from 'react-to-print';


const PDFblog = () => {
    const ref = useRef();
 
    return (
        <div>
            <div className='pdf'>
                <div className='sss'>
                    <div ref={ref} className='a'>
                    <h2 className='my-10 text-center text-4xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            <hr className='w-[80%] mx-auto' />
          <div className='grid md:grid-cols-2 gap-10 p-10'>
          <div>
                <h2 className='font-semibold mb-2 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit?</h2>
                
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae illum quasi voluptas magnam quia necessitatibus nesciunt praesentium, odio minus perspiciatis vel neque magni id, nulla repellat dignissimos architecto numquam!</p>
            </div>
            <div>
            <h2 className='font-semibold mb-2 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit?</h2>
                
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae illum quasi voluptas magnam quia necessitatibus nesciunt praesentium, odio minus perspiciatis vel neque magni id, nulla repellat dignissimos architecto numquam!</p>
            </div>
            <div>
            <h2 className='font-semibold mb-2 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit?</h2>
                
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae illum quasi voluptas magnam quia necessitatibus nesciunt praesentium, odio minus perspiciatis vel neque magni id, nulla repellat dignissimos architecto numquam!</p>
            </div>
            <div>
            <h2 className='font-semibold mb-2 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit?</h2>
                
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae illum quasi voluptas magnam quia necessitatibus nesciunt praesentium, odio minus perspiciatis vel neque magni id, nulla repellat dignissimos architecto numquam!</p>
            </div>
          </div>
                    </div>
                </div>
                <div className='inlinepy-10 flex justify-center py-10'>
                <ReactPrint trigger={()=> <button className='btn text-center bg-[#C59D5F] border-none'>Print and Download PDF</button>} content={()=> ref.current}></ReactPrint>
                </div>
            </div>
        </div>
    );
};

export default PDFblog;