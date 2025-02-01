import React from 'react'

function Cards() {
  return (
    <div className=' w-full h-screen bg-zinc-300 flex items-center px-32 gap-5 '>
        <div className='card-container h-[50vh] w-1/2'>
            <div className='card relative rounded-2xl w-full h-full  bg-[#004D43] flex items-center justify-center ' >
                <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute rounded-3xl px-5 py-1 border-2 left-10 bottom-10'> &copy;2019-2025</button>
            </div>
        </div>
        <div className='card-container flex gap-5 w-1/2 h-[50vh]'>
            <div className='card relative rounded-2xl w-1/2 h-full  bg-[#1d2c2a] flex items-center justify-center ' >
                
                <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute rounded-3xl px-5 py-1 border-2  bottom-10  tracking-tighter'>  RATING 5.0 ON CLUTCH</button>
            
            </div>
            <div className='card relative rounded-2xl w-1/2 h-full  bg-[#1d2c2a] flex items-center justify-center' >
                
                <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute rounded-3xl px-5 py-1 border-2  bottom-10  tracking-tighter'>BUSSINESS BOOTCAMP ALUMNI</button>
            
            </div>
        </div>
    </div>
  )
}

export default Cards
