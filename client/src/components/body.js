import React from 'react';

function Body() {
  return (
    <div>
        <div className='bodytag lg:w-full h-screen flex flex-col justify-between lg:bodytag'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
          <div className='flex flex-col justify-center md:items-start p-10 bg-white rounded-xl w-full'>
            <h1 className='py-3 text-4xl md:text-5xl font-bold hover:cursor-default'>Register a Ride now</h1>
            <div className='pt-4'>
              <input className='w-80 lg:w-96 p-4 inputbox   hover:outline-2' type="text"  placeholder='Add a pick-up location'/>
            </div>
            <div className='pt-2'>
              <input className='w-80 lg:w-96 inputbox p-4 hover:outline-2' type="text"  placeholder='Enter your destination'/>
            </div>
            <div className='pt-8'>
              <button className=' px-6 p-4 rounded-full outline ouline-offset-2 outline-1 hover:text-white hover:bg-black'>Get started</button>
            </div>
            
          </div>
        </div>
      </div>
      <section >
        <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
          <h2 className='text-4xl font-bold text-center '>Ride With Uber !!</h2>
          <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg md:w-1/3'>
              <img src=".\imgs\Auto.png" alt="P" className='w-16 -mt-14' />
              <h5 className='text-lg font-bold'>Uber Auto</h5>
              <p className='text-sm '>Get affordable Uber Auto rides with no haggling. Request Uber Auto and ride comforably around your city</p>
              
            </div>
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg md:w-1/3 '>
              <img src=".\imgs\moto.png" alt="P" className='w-16 -mt-14' />
              <h5 className='text-lg font-bold'>Uber Moto</h5>
              <p className='text-sm '>Get affordablebike rides at your doorstep. Skip the crowd and zip through traffic with Uber Moto</p>
              
            </div>
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg md:w-1/3'>
              <img src=".\imgs\Rental.png" alt="P" className='w-16 -mt-14' />
              <h5 className='text-lg font-bold'>Uber Rentals</h5>
              <p className='text-sm '>Book rentals to save time with one car and driver for your multi-stop trips</p>
              
            </div>
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg md:w-1/3'>
              <img src=".\imgs\Intersity.png" alt="P" className='w-16 -mt-14' />
              <h5 className='text-lg font-bold'>Uber Intercity</h5>
              <p className='text-sm '>Book Intercity to head outstation anytime in convenient and affordable cars</p>
              
            </div>
            
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default Body;