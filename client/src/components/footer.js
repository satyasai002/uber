import React from 'react';

function Footer() {
  return (
    <div>
        <footer className='bg-black text-white'>
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div>
            <h1 className='text-3xl font-semibold hover:cursor-default'>Uber</h1>
          </div>
          <div className='flex justify-center space-x-2'>
              <a href="#">
                <img src="./imgs/playstore.svg" alt="" />
              </a>
              <a href="#">
                <img src="./imgs/applestore.svg" alt="" />
              </a>
          </div>
          <div className='flex justify-center space-x-4'>
            <a  href="#">
              <img src="./imgs/icon-facebook.svg" alt="" />
            </a>
            <a href="#">
              <img src="./imgs/icon-instagram.svg" alt="" />
            </a>
            <a href="#">
              <img src="./imgs/icon-youtube.svg" alt="" />
            </a>
            <a href="#">
              <img src="./imgs/icon-twitter.svg" alt="" />
            </a>
          </div>
        </div>
        <div className='flex justify-center space-x-32'>
          <div className='flex flex-col space-y-3 '>
            <a className='hover:underline hover:font-semibold' href="">Home</a>
            <a className='hover:underline hover:font-semibold' href="">About</a>
            <a className='hover:underline hover:font-semibold' href="">Contact Us</a>
            <a className='hover:underline hover:font-semibold' href="">Log in</a>
            <a className='hover:underline hover:font-semibold' href="">sign in</a>
          </div>
          <div className='flex flex-col space-y-3 '>
            <a className='hover:underline hover:font-semibold' href="">Delhi</a>
            <a className='hover:underline hover:font-semibold' href="">Mumbai</a>
            <a className='hover:underline hover:font-semibold' href="">Bengaluru</a>
            <a className='hover:underline hover:font-semibold' href="">Hyderabad</a>
            <a className='hover:underline hover:font-semibold' href="">Chennai</a>
          </div>
          
          <div className='flex flex-col space-y-3 hover:curser-default '>
              <h3>Fedback</h3>
            <form className='pt-2'>
              <input className="w-80 lg:w-96 p-2 inputbox rounded   hover:outline-2" type="text" placeholder='Write for us' />
              <div className='pt-2'>
              <button className=' p-2 px-6 pt-2 rounded-full outline ouline-offset-2 outline-1 text-black bg-white hover:text-black hover:bg-[#dddbdb]'>Send</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
      </footer>
    </div>
  );
}

export default Footer;