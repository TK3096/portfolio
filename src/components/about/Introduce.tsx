'use client'

import { motion } from 'framer-motion'

import React from 'react'

export const Introduce: React.FC = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-[750px] space-y-3'>
        <h1 className='font-bold text-7xl'>
          Hi, I&#39;m{' '}
          <motion.span
            className='inline-block'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: 'spring',
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            Tong
          </motion.span>
        </h1>
        <h3 className='text-3xl'>
          I&#39;m a{' '}
          <strong className='text-red-600 in'>full Stack developer</strong>
        </h3>
        <motion.p
          className='text-neutral-300'
          initial={{ scaleX: 0, opacity: 0, transformOrigin: 'left center' }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          My name is Thanaphon (Tong) Keawjam. I am thai guy. I&#39;ve been
          working in this line of work for 3 years (fulltime work). I try to
          learn new things to improve my skills and incress my passion to
          coding.
        </motion.p>
        <motion.button
          className='bg-red-600 hover:bg-red-800 transition-colors duration-200 px-4 py-3 rounded-lg font-bold'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
            scale: {
              type: 'spring',
              damping: 5,
            },
          }}
        >
          Contact Me
        </motion.button>
      </div>
    </div>
  )
}
