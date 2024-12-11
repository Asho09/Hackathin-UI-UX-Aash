import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-white py-8 border-gray-200 w-[1890px]'>
      <div className=' container mx-auto px-4 md:px-12'>
        <div className='flex justify-evenly grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='text-gray-600 text-sm'>
<p>400 University Drive Suite 200 Coral Gables, FL 33134 USA </p>
          </div>
          <div >
            <h3 className='text-gray-500 text-sm font-medium mb-3'>Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href="#"className='text-gray-800 hover:text-black transition'>Home</a>
              </li>
              <li>
                <a href="#"className='text-gray-800 hover:text-black transition'>Shop</a>
              </li>
              <li>
                <a href="#"className='text-gray-800 hover:text-black transition'>About</a>
              </li>
              <li>
                <a href="#"className='text-gray-800 hover:text-black transition'>Contact</a>
              </li>
            </ul>
          </div>
          <div >
            <h3 className='text-gray-500 text-sm font-medium mb-3'>Help</h3>
            <ul className='space-y-2'>
              <li>
                <a href="#"className='text-gray-800 hover:text-black transition'>Payment Option</a>
              </li>
              <li>
                <a href="#"className='text-gray-800 hover:text-black transition'>Returns</a>
              </li>
              <li>
                <a href="#"className='text-gray-800 hover:text-black transition'>Privacy Policies</a>
              </li>
              </ul>
          </div>
          <div >
            <h3 className='text-gray-500 text-sm font-medium mb-3'>Newsletter</h3>
            <div className='flex items-center'>
              <input type="email"placeholder='Enter Your Email Address'className='flex-1 px-4 py-2border border-gray-300 rounded-1-md focus:outline-none focus:ring-1 focus:ring-black' />
              <button className='bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 border-b-2 border-black inline-block transition'>Subscribe</button>
            </div>
          </div> 
        </div>
        <div></div>
        <div className='mt-8 text-center text-gray-600 text-sm'>
          <p>2022 Meubel House, All right reserved</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer