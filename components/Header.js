import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from "framer-motion"
import SettingsIcon from '@mui/icons-material/Settings';

function Header() {
  const [colorYt, setColorYt] = useState('gray')
    const [colorFb, setColorFb] = useState('gray')
    const [colorIg, setColorIg] = useState('gray')
    const [colorTw, setColorTw] = useState('gray')
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center'>
        <motion.div className='flex flex-row items-center'
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.2,
        }}
        >
        <h3 className='uppercase tracking-[5px] md:tracking[15px] text-gray-500 text-xl'>Triviation</h3>
            
        </motion.div>
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.6,
        }}
        className='hidden md:flex items-center cursor-pointer justify-between text-gray-300'>
            <button className='heroButton'>About</button>
            <button className='heroButton'>Create</button>
            <button className='heroButton'>Categories</button>
            <button className='heroButton'>Customization</button>
        </motion.div>
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 2,
        }}
        className='flex flex-row items-center justify-end cursor-pointer text-gray-300'>
          <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
  
>
<SettingsIcon className='cursor-pointer mx-2 text-gray-400 hover:text-white transition-all duration-750' />
</motion.button>
            <p className='uppercase hidden md:inline-flex text-small text-gray-400'>Settings</p>
        </motion.div>
    </header>
  )
}

export default Header