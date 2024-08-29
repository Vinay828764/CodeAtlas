
function Books_card({item}) {
  return (
    <>
    <div className='cards p-2'>

    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300 border-2 shadow-slate-900">
  <figure>
    <img
      src={item.Image}
      alt="Name" />
  </figure>
  <div className="card-body">
    <h2 className="card-title ">
      {item.name}
      <div className="badge badge-secondary ">{item.Price}</div>
    </h2>
    <p>{item.Title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline hover:bg-sky-300 text-white duration-500">{item.category}</div>
      <div className="badge badge-outline hover:bg-sky-300 text-white duration-500">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    
    </>
  )
}

export default Books_card