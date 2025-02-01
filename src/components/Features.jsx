import { motion } from 'framer-motion'
import React, { useState } from 'react'


function Features() {
    const [isHovering, setHovering] =useState(false);
    const [isHovering1, setHovering1] =useState(false);
  return (
    <div className='w-full py-20 bg-zinc-900'>
        <div className='w-full px-10 border-b-[1px] border-zinc-600 pb-20'>
            <h1 className='text-7xl font-["Nueve_Montreal"] '>Featured Projects</h1>
        </div>

        <div className='px-20'>
            <div className="cards w-full flex gap-10 mt-10">
                <div 
                onMouseEnter={()=>setHovering(true)} 
                onMouseLeave={()=>setHovering(false)} 
                className="card-container relative w-1/2 h-[80vh] ">

                    <h1 className='absolute overflow-hidden flex left-full leading-none tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2 w-full  z-[9] text-6xl font-["Founders_Grotesk_X-Condensed"] text-[#d5ed4d]'>
                        {"CARDBOARD SPACESHIP".split('').map((item,index)=>
                        <motion.span 
                        className='inline-block ' 
                        initial={{y:"100%"}} 
                        animate={isHovering ? ({y:"0%"}):({y:"100%"})} 
                        transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.025}}
                         >


                            {item}</motion.span>)}
                    </h1>


                    <div className=' card w-full h-full rounded-2xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    </div>
                </div>

                <div
                 onMouseEnter={()=>setHovering1(true)} 
                 onMouseLeave={()=>setHovering1(false)}

                 className="card-container relative w-1/2 h-[80vh] ">

                <h1 className='absolute overflow-hidden flex right-full leading-none tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2 w-full  z-[9] text-6xl font-["Founders_Grotesk_X-Condensed"] text-[#d5ed4d]'>
                    
                     {"AH2 & MATT HORN".split('').map((item,index)=>
                     <motion.span 
                     className='inline-block ' 
                     initial={{y:"100%"}} 
                     animate={isHovering1 ? ({y:"0%"}):({y:"100%"})} 
                     transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.025}}
                      >


                         {item}</motion.span>)}
                </h1>


                    <div className=' card w-full h-full rounded-2xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Features
