import React from 'react'

function Card({name,image}) {

  return (
<div className="card w-80 glass">
  <figure className='bg-gradient-to-r from-purple-500 to-purple-900'><img src={image} alt="car!"/></figure>
  <div className="card-body bg-yellow-100">
    <h2 className="card-title text-green-900">{name.toUpperCase()}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>  )
}

export default Card