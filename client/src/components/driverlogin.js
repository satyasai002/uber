import React from 'react';

function Driverlogin() {
  return (
      <div className='flex flex-col items-center justify-center min-h-screen py-2 '>
    <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
        <div className='w-3/5 p-5'>
            <div className='text-left text-4xl font-semibold'>
                <span >Uber Driver</span>
            </div>
            <div className='py-10'>
                <h2 className='text-3xl font-bold text-black mb-2'>Log in to Account</h2>
                <div className='border-2 w-10 bg-black border-black inline-block mb-2'></div>
                <div className='flex justify-center my-2 space-x-4'>
                    <a href="#"><img src="./imgs/google.svg" alt="" /></a>
                    <a href="#"><img src="./imgs/facebook.svg" alt="" /></a>
                </div>
                <p className='text-gray-400 my-3'>or use your email account</p>
                <form>
                <div className='pt-4 flex'>
                <img className='m-2' src="./imgs/email.svg" alt="" />
              <input className='w-80 mx-2 lg:w-96 p-4 inputbox   hover:outline-2' type="text"  placeholder='Email'/>
            </div>
            <div className='pt-2 flex'>
                <img className='m-2' src="./imgs/lock.svg" alt="" />
              <input className='w-80 mx-2 lg:w-96 inputbox p-4 hover:outline-2' type="text"  placeholder='Password'/>
            </div>
            <div className='ml-20 mt-2 flex justify-between w-80 mb-5'>
                <label className='flex items-center text-xs'><input type="checkbox" name='remember me' className='mr-1' />Remember me</label>
                <a href="#" className='text-xs hover:fond-semibold hover:underline'>Forgot Password?</a>
                <a href="#" className='text-xs hover:fond-semibold hover:underline'>Login as User</a>
            </div >
            <div>
            <a href="" className='border-2 border-black rounded-full px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white'>LogIn</a>
            </div>
            <div  >
                <p>or</p>
            </div>
            <div>
            <a href="" className='border-2 border-black rounded-full px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white'>User LogIn</a>
            </div>
            </form>
            </div>
            
            </div>
        <div className='w-2/5 bg-black text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h2 className='text-3xl font-semibold md-2'>Join Us!!</h2>
            <div className='border-2 w-10 justify-center bg-white border-white inline-block mb-2'></div>
            <p className='mb-10'> Uber The best way to travel to your destination</p>
            <a href="" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black'>Apply</a>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Driverlogin;