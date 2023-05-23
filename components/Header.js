import React from 'react'
import { motion } from "framer-motion"
import Settings from './Settings';

function Header() {
    return (
        <header className='sticky top-0 flex items-start justify-between mx-auto z-20 px-14 p-5 xl:items-center bg-[rgb(33,33,33)] overflow-hidden'>
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
                }}>
                <h3 className='uppercase tracking-[5px] md:tracking[20px] text-gray-500 text-xl'>Triviation</h3>

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

                <a href="#home"><button className='heroButton'>Home</button></a>
                <a href="#create"><button className='heroButton'>Create</button></a>
                <a href="#customize"><button className='heroButton'>Customization</button></a>
                <button className='heroButton'>Categories</button>
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
                <Settings />
            </motion.div>
        </header>
    )
}

export default Header