import React from 'react'

const Cart = ( props ) => {
  const {showOrder} = props ;
  return (
    <div className={`lg:col-span-2 fixed right-0 top-0 bg-[#1f1d2b] w-full lg:right-0 lg:w-96 h-full ${showOrder ? "right-0" : "-right-full"} transition-all`}> 

    { /* Orders */}

   <div className='relative pt-16 lg:pt-8 text-gray-300 p-8 h-full overflow-y-scroll pb-96'> 
      <RiCloseLine className='lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl' onClick={toggleOrder} />

      <h1 className='text-2xl my-4'> Orders #151416</h1>

      { /* */ }
      <div className='flex items-center gap-4 flex-wrap mb-8'>

          <button className='bg-[#ec7c6a] text-white py-2 px-4 rounded-xl'> Dime in </button>
          <button className='text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-600'> To go </button>
          <button className='text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-600'> Delivery </button>

      </div>

      { /* Car */}
      <div>

          <div className='grid grid-cols-6 mb-4 p-4'>
            <h5 className='col-span-4'> Item </h5>
            <h5> Canti </h5>
            <h5> Price </h5>
          </div>

      {/* Products*/}

      <div className='h-[400px] md:h-[700px] lg:h-[540px] overflow-y-scroll'>
            
         {/* Products */}

        <div className='bg-[#262837] p-4 rounded-xl mb-4'> 


              <div className='grid grid-cols-6 mb-4'>
                {/* Description */} 
                <div className='col-span-4 flex items-center gap-3'>
                  <img src="plato.png" className='w-10 h-10 object-cover'/>
                  <div>
                  <h5 className='text-sm'> Spacy Seasone</h5>
                  <p className='text-xs text-gray-500'>  $2.29</p>
                  </div>                  
                </div>
                {/* Quantity */}
                <div>                 
                  <span className='ml-4'> 2 </span>                
                </div>
                {/* Price */}
                <div >
                  <span>$4.58</span>
                </div>
              </div>

              {/* Notes */}

              <div className='grid grid-cols-6 items-center justify-center gap-2'>
                  
                <form className='col-span-5 '>
                  <input type="text" 
                          className='bg-[#1f1d2b] rounded-lg py-1 px-4 placeholder:text-xs' placeholder='Order note...'/>

                </form>

                <div className='col-span-1 text-center'>
                  <button className='border border-red-500 p-2 rounded-lg'> 
                      <RiDeleteBin6Line className='text-red-500'/> 
                  </button>
                </div>

              </div>

            
        </div>

        <div className='bg-[#262837] p-4 rounded-xl mb-4'> 


<div className='grid grid-cols-6 mb-4'>
{/* Description */} 
<div className='col-span-4 flex items-center gap-3'>
  <img src="plato.png" className='w-10 h-10 object-cover'/>
  <div>
  <h5 className='text-sm'> Spacy Seasone</h5>
  <p className='text-xs text-gray-500'>  $2.29</p>
  </div>                  
</div>
{/* Quantity */}
<div>                 
  <span className='ml-4'> 2 </span>                
</div>
{/* Price */}
<div >
  <span>$4.58</span>
</div>
</div>

{/* Notes */}

<div className='grid grid-cols-6 items-center justify-center gap-2'>
  
<form className='col-span-5 '>
  <input type="text" 
          className='bg-[#1f1d2b] rounded-lg py-1 px-4 placeholder:text-xs' placeholder='Order note...'/>

</form>

<div className='col-span-1 text-center'>
  <button className='border border-red-500 p-2 rounded-lg'> 
      <RiDeleteBin6Line className='text-red-500'/> 
  </button>
</div>

</div>


        </div>

        <div className='bg-[#262837] p-4 rounded-xl mb-4'> 


        <div className='grid grid-cols-6 mb-4'>
          {/* Description */} 
          <div className='col-span-4 flex items-center gap-3'>
            <img src="plato.png" className='w-10 h-10 object-cover'/>
            <div>
            <h5 className='text-sm'> Spacy Seasone</h5>
            <p className='text-xs text-gray-500'>  $2.29</p>
            </div>                  
          </div>
          {/* Quantity */}
          <div>                 
            <span className='ml-4'> 2 </span>                
          </div>
          {/* Price */}
          <div >
            <span>$4.58</span>
          </div>
        </div>

        {/* Notes */}

        <div className='grid grid-cols-6 items-center justify-center gap-2'>
            
          <form className='col-span-5 '>
            <input type="text" 
                    className='bg-[#1f1d2b] rounded-lg py-1 px-4 placeholder:text-xs' placeholder='Order note...'/>

          </form>

          <div className='col-span-1 text-center'>
            <button className='border border-red-500 p-2 rounded-lg'> 
                <RiDeleteBin6Line className='text-red-500'/> 
            </button>
          </div>

        </div>


        </div>

        <div className='bg-[#262837] p-4 rounded-xl mb-4'> 

        <div className='grid grid-cols-6 mb-4'>
            {/* Description */} 
            <div className='col-span-4 flex items-center gap-3'>
              <img src="plato.png" className='w-10 h-10 object-cover'/>
              <div>
              <h5 className='text-sm'> Spacy Seasone</h5>
              <p className='text-xs text-gray-500'>  $2.29</p>
              </div>                  
            </div>
            {/* Quantity */}
            <div>                 
              <span className='ml-4'> 2 </span>                
            </div>
            {/* Price */}
            <div >
              <span>$4.58</span>
            </div>
        </div>

{/* Notes */}

<div className='grid grid-cols-6 items-center justify-center gap-2'>
  
<form className='col-span-5 '>
  <input type="text" 
          className='bg-[#1f1d2b] rounded-lg py-1 px-4 placeholder:text-xs' placeholder='Order note...'/>

</form>

<div className='col-span-1 text-center'>
  <button className='border border-red-500 p-2 rounded-lg'> 
      <RiDeleteBin6Line className='text-red-500'/> 
  </button>
</div>

</div>


        </div>

      </div>      

      </div>  

      {/* Submit payment*/}

      <div className='bg-[#262837] absolute w-full bottom-0 left-0 p-4'>
      </div>   

   </div>

      
  
    </div>
  )
}

export default Cart