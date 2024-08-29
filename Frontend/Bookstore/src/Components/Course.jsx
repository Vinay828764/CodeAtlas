import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import list from '../../public/List.json'
import Books_card from './Books_card'
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
    <Navbar></Navbar>
    <div className=' mt-40 container max-w-screen-2xl m-auto '>
      <div className='course-detail text-center mx-3'>
      <h2 className='text-2xl md:text-5xl'>We're delighted to have you here!:</h2>
      <p className='text-md md:text-xl md:mt-5 mt-3 md:text-center text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iusto, vitae obcaecati quaerat debitis eum reprehenderit qui deserunt aliquam. Tempore accusantium numquam atque consequatur minima quo doloremque sed dolor labore. Earum reiciendis harum quisquam exercitationem ipsa omnis maxime ipsam tempora?</p>
      <Link to='/'>
      <button className='btn btn-outline px-8 font-bold mt-3 inline-block '>Buy</button>
      </Link>
      </div>
      {/* book data */}
      <div className='books grid  grid-cols-1 md:grid-cols-4 gap-4 mx-4 md:mx-8 my-8'>
        {list.map((item)=>(
          <Books_card item ={item} key={item.id}/>
        ))}
      </div>
    </div>


    <Footer></Footer>
    </>
  )
}

export default Course