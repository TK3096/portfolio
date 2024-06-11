'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import { cn } from '@/libs/utils'

export const MBTI: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  // useEffect(() => {
  //   console.log(isInView)
  // }, [isInView])

  return (
    <div className='h-screen flex justify-center relative'>
      <div id='mbti' ref={ref} className='absolute top-48'>
        <h1
          className={cn(
            'text-5xl font-bold opacity-0 scale-[0.5] transition-all duration-500',
            isInView && 'opacity-100 scale-125',
          )}
        >
          My MBTI
        </h1>
      </div>
    </div>
  )
}
