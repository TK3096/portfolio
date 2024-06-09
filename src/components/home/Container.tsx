'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, useAnimationControls } from 'framer-motion'

import { MenuItem } from '@/components/home/MenuItem'

import { cn } from '@/libs/utils'

export const Container = () => {
  const [bg, setBg] = useState('')

  const control = useAnimationControls()

  const handleHover = (value: string) => {
    setBg(value)
    control.start('play')
  }

  const handleLeave = () => {
    control.start('stop')
  }

  return (
    <div className='h-full flex flex-col md:flex-row justify-center items-center gap-28 relative'>
      <motion.div
        className={cn('w-full h-full absolute inset-0 -z-10', bg)}
        initial='initial'
        animate={control}
        variants={{
          initial: {
            scaleX: 0,
          },
          play: {
            scaleX: 1,
          },
          stop: {
            scaleX: 0,
          },
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      />
      <Link href='/about'>
        <MenuItem
          onHover={() => handleHover('bg-indigo-500')}
          onLeave={handleLeave}
        >
          About Me
        </MenuItem>
      </Link>
      <Link href='/projects'>
        <MenuItem
          onHover={() => handleHover('bg-red-500')}
          onLeave={handleLeave}
        >
          Projects
        </MenuItem>
      </Link>
      <Link href='/hobbies'>
        <MenuItem
          onHover={() => handleHover('bg-emerald-500')}
          onLeave={handleLeave}
        >
          Hoobies
        </MenuItem>
      </Link>
    </div>
  )
}
