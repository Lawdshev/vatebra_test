import React from 'react'

function CountryCard() {
  return (
    <div className='px-6 py-2'>
        <div className='flex items-center w-1/4 justify-between'>
            <span><i className='fa-regular fa-flag'></i></span>
            <h1 className='italic'>Netherland</h1>
        </div>
        <div className='flex items-center mt-[1px] w-4/12 italic font-normal'>
            <h1>Continent:</h1>
            <span className='ml-1'>Europe</span>
        </div>
        <button className='bg-black text-[#ccc] mt-[1px] font-thin text-sm py-1 px-4'>See details...</button>
    </div>
  )
}

export default CountryCard