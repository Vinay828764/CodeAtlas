import React, { useState ,useEffect} from 'react'
import Login from './Login';

function Navbar() {
  
  //  navbar scroll condition
  const [sticky,setsticky] = useState(false);
  useEffect(() => {
    const handlescroll=() =>{
      if(window.scrollY > 0){setsticky(true)}
      else(setsticky(false))
    }
    window.addEventListener('scroll',handlescroll)
    return () => {
      window.removeEventListener('scroll',handlescroll)
    }
  }, [])


    const Navlinks = (
        <>
      <li><a href='/'>Home</a></li>
      <li><a href='/course'>Course</a></li>
      <li><a href='/contact'>Contact</a></li>
      <li><a href='/about'>About</a></li>
        </>
    )
  return (
    <>
     <div className={`z-50 max-w-screen-2xl container mx-auto md:px-20 lg:px-10 px-1 fixed top-0 right-0 left-0 bg-[#1d232a]${sticky?"sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out":""}`}>
     <div className="flex items-center justify-between lg:p-2 my-2">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {Navlinks}
      </ul>
    </div>
    <a className=" lg:text-2xl text-xl font-bold cursor-pointer uppercase">CodeAtlas
    </a>
  </div>
    <div className='flex items-center'>
    <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal  px-1 uppercase">
      {Navlinks}
    </ul>
  </div> 
  <div className='search_input  hidden md:block mx-5'>
  <label className="mx-2 input border-none input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
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
 
  <div className="flex justify-center items-center">
    <a className="btn btn-outline px-3 py-0 lg:py-3 lg:px-6 duration-300 rounded-md cursor-pointer min-h-2 h-10" onClick={()=> document.getElementById('my_modal_3').showModal()}>Login</a>
    <Login/>
  </div>
    </div>
</div>
     </div>
    </>
  )
}

export default Navbar