import React from 'react'
import heroimg from '../assets/About-img.jpg'

function Hero() {

    return (
    <>
    <main className='container m-auto mt-12  lg:mt-40  lg:p-0 p-3 '>
      <div className='sides flex  justify-between items-center lg:flex-nowrap flex-wrap '>
      <div className='leftside  w-full  md:w-1/2 flex flex-col lg:gap-6 gap-0  m-3'>
        <h2 className='lg:text-3xl text-xl my-2 font-bold  '>Hello,Welcome here to learn <br /> something <span className='text-sky-300 '>new everyday !!!</span>
        </h2>
        <p className='lg:text-lg text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi excepturi earum! Modi nisi ut obcaecati totam eius cupiditate facilis!</p>
        <div className='search_input '>
  <label className=" input w-full  input-bordered border-none border-b-2 flex items-center gap-2">
  <input type="text" className="grow" placeholder="Enter your email to login" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
  </div>
        {/* <button className='bg-black text-white px-4 py-3 hover:bg-transparent border border-black  duration-300 rounded-md cursor-pointer '>Secondary

        </button> */}
        <button className='btn btn-outline mt-3 inline-block w-28'>Secondary</button>
       </div>
       <div className='rightside w-full  md:w-1/2 flex justify-center '>
        <img src={heroimg} alt="Bookstore Img" className='w-96 h-96 object-cover' />
       </div>
      </div>
      <div className='bottomside lg:text-lg text-sm mt-4 '>
        <h5 className='lg:text-3xl text-xl my-2 font-bold '>Free Offered <span className='text-sky-300'>Courses</span></h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vitae ducimus quas ipsam, exercitationem minima velit eveniet. Consectetur, minima libero?</p>
       </div>
    </main>
    
    
    
    
    
    </>
  )
}

export default Hero