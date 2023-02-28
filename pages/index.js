import Head from 'next/head'
import Home from '../components/Home'
import Header from '../components/Header'
import Create from '../components/Create'
import BrushIcon from '@mui/icons-material/Brush';
import Customize from '../components/Customize';

export default function Index() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white snap-y snap-mandatory z-0 overflow-hidden'>
      <Head>
        <title>Triviation 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
          {/* Header */} 
          <Header />

          {/* Home */}
          <section id='home' className='snap-start'>
      <Home />
      </section>

          {/* Create */}
          <section id='create' className='snap-start'>
      <Create />
      </section>

          {/* Categories */}
          <section id='customize' className='snap-start'>
      <Customize />
      </section>

          {/* Custom */}
        <div className="fixed right-5 bottom-5 text-right cursor-pointer rounded-full m-0">
          <button className='hover:opacity-70 animation-all duration-300'>
          <div className="h-12 w-12 flex items-center justify-center bg-[#F7AB0A]/80 rounded-full hover:bg-opacity-30"><BrushIcon /></div>
          </button>
        </div>
  
        </div>
  )
}
