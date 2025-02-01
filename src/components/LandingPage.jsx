import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

function LandingPage() { 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-52 px-20">

      {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
        return (<div className="masker">
          <div className="w-fit flex">
            {index === 1 && ( 
            <motion.div 
            initial={{width: 0}} 
            animate={{width: "9vw"}}
             transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
             className='mr-[1vw] w-[9vw] rounded-lg h-[5.5vw] relative -top-[-0.4vw] bg-red-400'> 
             </motion.div>)}
          <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-["Founders_Grotesk"] font-medium'> 
          {item}
          </h1>
          </div>
      </div>

        );
      })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20 capitalize">
      {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
        
        <p className='text-md font-light tracking-tight leading-none'> {item}</p>
      ))}

      <div className="start flex items-center gap-3">
        <button className='border-[2px] border-zinc-700 px-10 py-2 rounded-full text-white hover:bg-zinc-600 font-light uppercase text-md'>Start the project</button>
        
        <div className='w-10 h-10 rounded-full border-[2px] border-zinc-700 flex justify-center items-center hover:bg-zinc-600'>
         <span className='rotate-[15deg]'>
            <FaArrowTrendUp className='w-7 h-7' />
         </span>
          

        </div>
      </div>
      </div>
    </div>
  )
}

export default LandingPage
