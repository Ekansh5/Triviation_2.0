import React from 'react'


function Create() {
  return (
    <div id="create" className='md:max-w-7xl mx-auto z-20 p-5 xl:items-center scroll-smooth'>
       <div className='flex flex-col mt-5 space-y-5 text-[15px] md:text-[25px] font-bold font-sans'>
       <h1 className='text-[25px] md:text-[30px] font-bold font-sans'>Create Your Own Quiz</h1>
          <div className='flex text-[20px]'>
            <h1>Create your own quiz&nbsp;
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F7AB0A]/70 to-[#F7AB0A]/40'>and share it with anyone in the world</span>
            </h1>
            </div>
          </div>
        <div className='flex md:flex-row flex-col md:space-y-0 space-y-5 md:space-x-5 my-7'>
          <div className='box'>
            <h1 className='font-bold text-[20px] text-[#F7AB0A]/90'> Step 1</h1>
            <p>Easily create your quiz with our easy GUI</p>
          </div>
          <div className='box'>
          <h1 className='font-bold text-[20px] text-[#F7AB0A]/90'> Step 2</h1>
            <p>Easily create your quiz with our easy GUI</p>
          </div>
          <div className='box'>
          <h1 className='font-bold text-[20px] text-[#F7AB0A]/90'> Step 3</h1>
            <p>Easily create your quiz with our easy GUI</p>
          </div>
          <div className='box'>
          <h1 className='font-bold text-[20px] text-[#F7AB0A]/90'> Step 4</h1>
            <p>Easily create your quiz with our easy GUI</p>
          </div>
        </div>
    </div>  
  )
}

export default Create