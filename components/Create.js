import React, { useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import {motion} from "framer-motion"


function Create() {
  const [selectedId, setSelectedId] = useState(null)
  const [text, count] = useTypewriter({
    words: [
      "Create your own quiz to challenge others. This can be as simple or as complex as you like!",
      "Personalize your quizzes as you like them.",
      "Choose from a variety of layouts, each layout having a unique feature. Start quizzing today!",
    ],
    delaySpeed: 1000
})

  return (
    <section id="create" className='md:max-w-7xl mx-auto z-20 p-5 xl:items-center overflow-hidden'>
       <div className='flex flex-col mt-5 space-y-5 text-[15px] md:text-[25px]'>
       <h3 className='font-bold uppercase tracking-[20px] text-gray-500 text-2xl'>Create</h3>
            <div className='md:flex text-lg md:text-xl font-mono hidden'>
            <p>{text}</p>
            <Cursor cursorColor='#F7AB0A'/>
            </div>
          </div>
        <div className='flex md:flex-row flex-col md:space-y-0 space-y-5 md:space-x-5 my-7'>
          <motion.div className='box'
           whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          >
            <h1 className='font-bold text-[20px] text-[#F7AB0A]/90'> Step 1</h1>
            <p className='font-mono'>Easily create your quiz with our easy GUI</p>
          </motion.div>
          <motion.div className='box'
           whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          >
          <h1 className='font-bold text-[20px] text-[#F7AB0A]/90'> Step 2</h1>
            <p className='font-mono'>Easily create your quiz with our easy GUI</p>
          </motion.div>
          <motion.div className='box'
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          >
          <h1 className='font-bold text-[20px] text-[#F7AB0A]/90'> Step 3</h1>
            <p className='font-mono'>Easily create your quiz with our easy GUI</p>
          </motion.div>
          <motion.div className='box'
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          >
          <h1 className='font-bold text-[20px] text-[#F7AB0A]/90'> Step 4</h1>
            <p className='font-mono'>Easily create your quiz with our easy GUI</p>
          </motion.div>
        </div>
    </section>  
  )
}

export default Create