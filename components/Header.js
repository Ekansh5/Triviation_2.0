import React, { useState } from 'react'
import { motion } from "framer-motion"
import Settings from './Settings';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from '@mui/material';

function Header() {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <header className={open ? 'sticky top-0 flex flex-col mx-auto z-20 px-14 p-5 bg-[rgb(33,33,33)] overflow-hidden' : 'sticky top-0 flex flex-row items-start justify-between mx-auto z-20 px-14 p-5 xl:items-center bg-[rgb(33,33,33)] overflow-hidden'}>
           <div className={open ? 'flex flex-row items-center justify-between' : 'flex flex-row w-screen justify-between items-center'}>
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
                <h3 className='uppercase tracking-[5px] md:tracking[20px] text-gray-500 text-xl z-30'>Triviation</h3>

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

                <Link href="/"><button className='heroButton'>Home</button></Link>
                <a href=""><button className='heroButton'>Create</button></a>
                <a href=""><button className='heroButton'>Categories</button></a>
                <button className='heroButton'>Customize</button>
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
                className='md:flex flex-row items-center justify-end cursor-pointer text-gray-300 hidden'>
                <Settings />
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
                className='md:hidden flex flex-col items-center justify-end cursor-pointer text-gray-300'>
                <motion.button
                    whileFocus={{ rotate: 50 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}

                >
                    <MenuIcon onClick={() => handleOpen()} className={ open ? 'hidden' : 'cursor-pointer lg:hover:text-white mx-2 text-3xl text-gray-400 transition-all duration-750'} />
                </motion.button>

                <motion.button
                    whileFocus={{ rotate: 50 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}

                >
                    <CloseIcon onClick={() => handleClose()} className={ open ? 'cursor-pointer z-30 lg:hover:text-white mx-2 text-3xl text-gray-400 transition-all duration-750' : 'hidden'} />
                </motion.button>
                
            </motion.div>   
            </div>
            <div 
            className={open ? 'space-y-2 p-2 flex flex-col text-black mt-2' : "hidden"}>
                <motion.button 
               initial={{
                    y: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                
                className='py-[7px] border border-[#F7AB0A]/40 rounded-lg uppercase text-xs tracking-widest text-gray-500'>Home</motion.button>
                <motion.button 
                initial={{
                    y: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className='py-[7px] border border-[#F7AB0A]/40 rounded-lg uppercase text-xs tracking-widest text-gray-500'>Create</motion.button>
                <motion.button 
                initial={{
                    y: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className='py-[7px] border border-[#F7AB0A]/40 rounded-lg uppercase text-xs tracking-widest text-gray-500'>Categories</motion.button>
                <motion.button 
                initial={{
                    y: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className='py-[7px] border border-[#F7AB0A]/40 rounded-lg uppercase text-xs tracking-widest text-gray-500'>Customize</motion.button>
                <motion.button 
                initial={{
                    y: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className='py-[7px] border border-[#F7AB0A]/40 rounded-lg uppercase text-xs tracking-widest text-gray-500'>Sign Up</motion.button>

            </div>
        </header>
    )
}

export default Header