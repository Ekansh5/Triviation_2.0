import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

function categories() {
  return (
    <div className='page'>
      <Head>
        <title>Triviation 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
          {/* Header */} 
          <Header />
    </div>
  )
}

export default categories