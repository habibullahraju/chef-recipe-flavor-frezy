import React from 'react';

const MessageBanner = () => {
    return (
        <div>
            <div className='bg-black relative'>
                <img className='w-full h-[700px] object-cover opacity-50' src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80" alt="" />
                <div className='absolute top-32 md:top-36 px-3 md:px-0 md:right-10 text-white md:w-[600px]'>
                <h4>MESSAGE FROM FOUNDER</h4>
                <h2 className='text-5xl font-bold py-5'>First, we eat. Then, we <br /> do everything else.</h2>
                <p className='py-5'>Consectetur quisque per vel ac aptent praesent convallis aliquam montes. Lectus sit inceptos dis dui mattis ad morbi leo luctus duis. Mauris neque dictumst letius consequat senectus potenti ad.</p>
                <p>Consectetur quisque per vel ac aptent praesent convallis aliquam montes. Lectus sit inceptos dis dui mattis ad morbi leo luctus duis. Mauris neque dictumst letius consequat senectus potenti ad.</p>
            </div>
            </div>
          
        </div>
    );
};

export default MessageBanner;