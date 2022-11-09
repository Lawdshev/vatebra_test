import React, { useState } from 'react';
import CountryCard from '../components/CountryCard';

function Home() {
    const [input, setInput] = useState('');

    

  return (
    <div className='border-2 border-black border-solid w-4/5 md:w-2/6 mx-auto mt-4 min-h-[70vh]'>
        <div className='flex border-b-2 border-b-black border-b-solid items-center w-full'>
            <div className='flex w-4/6 pl-2 items-center justify-between'>
                <div>
                   <span>o</span>
                   <span>o</span>
                   <span>o</span>
                </div>
                <h1 className='italic font-thin text-[#ccc]'>Countries Catalog</h1>
            </div>
        </div>
        <div className='border-b-2 border-b-black border-b-solid px-8 py-4'>
            <h1 className='italic font-normal text-lg'>Keyword</h1>
            <div className='w-[90%] flex items-center justify-between'>
                <input type="text" className='border-2 border-black border-solid w-4/6 px-1' placeholder='input search here' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type="submit" className='bg-black py-[4px] px-6 itaic text-[#ccc] text-sm'>Search</button>
            </div>      
        </div>
        <div className='flex flex-wrap'>
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
        </div>
    </div>
  )
}

export default Home