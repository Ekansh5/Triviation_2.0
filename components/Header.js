import React from 'react'
import {motion} from "framer-motion"
import SettingsIcon from '@mui/icons-material/Settings';

function Header() {
  return (
    <header className='sticky top-0 flex items-start justify-between mx-auto z-20 px-14 p-5 xl:items-center bg-[rgb(33,33,33)]'>
        <div className='flex flex-row items-center'
        >
        <h3 className='uppercase tracking-[5px] md:tracking[20px] text-gray-500 text-xl'>Triviation</h3>
            
        </div>
        <div
        className='hidden md:flex items-center cursor-pointer justify-between text-gray-300'>
            
            <a href="#home"><button className='heroButton'>Home</button></a>
            <a href="#create"><button className='heroButton'>Create</button></a>
            <a href="#categories"><button className='heroButton'>Categories</button></a>
            <button className='heroButton'>Customization</button>
        </div>
        <div
        className='flex flex-row items-center justify-end cursor-pointer text-gray-300'>
          <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
  
>
<SettingsIcon className='cursor-pointer mx-2 text-gray-400 hover:text-white transition-all duration-750' />
</motion.button>
            <p className='uppercase hidden md:inline-flex text-small text-gray-400'>Settings</p>
        </div>
    </header>
  )
}

export default Header