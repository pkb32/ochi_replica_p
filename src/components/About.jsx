import React from 'react'

function About() {
  return (
    <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] px-20 text-[4vw] leading-[3.5vw] tracking-tight'>
        Ochi is a strategic presentation 
        agency for forward-thinking 
        businesses that need to raise 
        funds, sell products, explain
        complex ideas, and hire great people.
        </h1>
        <div className='w-full mt-20 border-t-[1px] border-[#b6d455]'></div>
        <div className='w-full h-[40vh] mt-5 flex '>
            <div className=' w-[10%] flex font-["Neue_Montreal"] font-medium  text-[1.1vw] '>
            <p className='pt-3'>What you can except:</p>
            </div>

            <div className='w-[18%]  ml-[30vw] font-["Neue_Montreal"]  font-medium  text-[1.1vw]'>
            <p className='pt-3'> We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people. </p>
            <p className='pt-12'> We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>

            <div className='pt-32 ml-[10vw] font-["Neue_Montreal"] font-medium text-[1.1vw] '>
                    <ul>
                        <th> S:</th>
                        <li>
                       <a href="">Instagram</a> 
                        </li>
                        <li>
                        <a href="">Behance</a>
                        
                        </li>

                        <li>
                        <a href="">Facebook</a>
                        
                        </li>

                        <li>
                        <a href="">Linkedin</a>
                        
                        </li>

                    </ul>
            </div>
            
        </div>
        <div className='w-full mt-20 border-t-[1px] border-[#b6d455]'></div>
        <div className='w-full h-[40vh] mt-5 flex'>

        </div>
    </div>
  )
}

export default About
