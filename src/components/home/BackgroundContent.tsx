'use client'

import React from 'react'
import { AnimationControls, motion, useAnimation } from 'framer-motion'

import { cn } from '@/libs/utils'

const variants = {
  hidden: {
    scaleX: 0,
    transition: { duration: 0.1, ease: 'easeInOut' },
  },
  visible: {
    scaleX: 1,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}

interface BackgroundContentProps {
  src?: string
  controls: AnimationControls
}

export const BackgroundContent: React.FC<BackgroundContentProps> = (
  props: BackgroundContentProps,
) => {
  const { src, controls } = props

  return (
    <motion.div
      className={cn('w-full h-full absolute inset-0 -z-10 opacity-20')}
      variants={variants}
      initial='hidden'
      animate={controls}
    >
      {src && (
        <motion.video
          className='w-full h-full object-cover'
          src={src}
          autoPlay
          loop
          muted
        />
      )}
    </motion.div>
  )
}
