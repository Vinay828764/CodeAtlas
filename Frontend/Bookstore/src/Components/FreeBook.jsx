import book from '../../public/List.json'
import Slider from 'react-slick' 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Books_card from './Books_card';


function FreeBook() {
    var settings = {
        dots: true,
        
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const freebook = book.filter((data)=>data.category === "Free")
    console.log(freebook)
  return (
    <>
    
    <div className="max-w-screen-2xl container  mt-20 m-auto md:px-20 px-4">
    <div className='flex justify-center items-center  text-5xl text-sky-300 font-bold mb-6 uppercase'><h1>Course</h1></div>
    <Slider {...settings}>
        {freebook.map((items)=>(
            <Books_card item = {items} key={items.id}/>))}
      </Slider>
    </div>
    </>
  )
}

export default FreeBook