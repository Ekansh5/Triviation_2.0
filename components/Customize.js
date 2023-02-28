import React from 'react'


function Customize() {
  return (
    <section id="customize" className='md:max-w-7xl mx-auto z-20 p-5 xl:items-center overflow-hidden'>
       <div className='flex flex-col mt-5 space-y-5 text-[15px] md:text-[25px] font-bold font-sans'>
       <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>Customize</h3>
      <div className='flex text-[20px]'>
            <h1>Customize your quiz&nbsp;
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F7AB0A]/70 to-[#F7AB0A]/40'>based on your own interest</span>
            </h1>
            </div>
          </div>
          <div className='flex-col mt-7 '>
          <h1 className='text-[10px] md:text-[20px] font-bold font-sans'>Top Quizzes</h1>
        <div className='flex md:flex-row flex-col md:space-y-0 space-y-5 md:space-x-5 my-5'>
            <div className='box'>Hello</div>
            <div className='box'>Hello</div>
            <div className='box'>Hello</div>
        </div>
        </div>
    </section>  
  )
}

export default Customize