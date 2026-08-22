import React from 'react'
import ConstructionIMG from "../assets/images/under-construction.png";


function Products() {
  return (
   <div className="min-h-screen w-full py-0">
      <h1 className="text-2xl font-bold text-center text-orange-700 py-3">Our Products</h1>
      <hr className='border-orange-700'/>
<div className="flex justify-center py-12">
  <img src={ConstructionIMG} alt="Website under construction illustration" className="w-96 h-64" />
</div>      
    </div>
  )
}
export default Products

