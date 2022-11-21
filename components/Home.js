import React from 'react'
import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';
import Pic from '../images/Home.png'
import Image from 'next/image';
function Home() {
  return (
    <section id='home' className='flex mt-[50px] items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center '>
    <div>
        <div className='flex items-center text-[12px] bg-gradient-to-r tracking-[3px] from-[rgb(56,55,55)] to-[rgb(24,23,23)] p-2 rounded-lg w-fit'>
            <div className='bg-[rgb(36,36,36)] rounded-lg mr-2 p-[2px]'><MoneyOffCsredIcon className='text-base text-[#F7AB0A]/70' /></div>
            <span className='text-gray-400'>Completely for </span> 
            <span className='text-[#F7AB0A]/70'>&nbsp;free</span> 
            <span className='text-gray-400'>,&nbsp;try now</span>
        </div>
        <div className='flex flex-col mt-5 space-y-5 text-[40px] font-bold font-sans'>
            <span>With The New And Improved GUI,</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F7AB0A]/70 to-[#F7AB0A]/30'>This Is The Perfect Location For </span>
            <span> Geeks Up For Quizzes</span> </div>
    </div>
    <div>
        <Image 
        src={Pic}
        alt='Home'
        />
    </div>
    </section>
)
}

export default Home