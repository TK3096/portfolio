'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { Mochiy_Pop_P_One } from 'next/font/google'

import { cn } from '@/libs/utils'

const font = Mochiy_Pop_P_One({ subsets: ['latin'], weight: '400' })

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0, scale: 0 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
}

export const MobileMenu: React.FC = () => {
  const controls = useAnimation()

  useEffect(() => {
    let timmer: NodeJS.Timeout

    const show = () => {
      controls.start('visible')

      timmer = setInterval(async () => {
        await controls.start('hidden')
        controls.start('visible')
      }, 8000)
    }

    show()

    return () => {
      clearInterval(timmer)
    }
  }, [controls])

  return (
    <div className='md:hidden h-full px-4 py-6'>
      <motion.ul
        className={cn(
          'flex flex-col justify-center items-center h-full gap-20',
          font.className,
        )}
        variants={container}
        initial='hidden'
        animate={controls}
      >
        <motion.li variants={item}>
          <Link href='/about'>
            <p className='text-5xl'>About</p>
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='/work-and-project'>
            <p className='text-4xl'>Work / Project</p>
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='/hooby'>
            <p className='text-5xl'>Hooby</p>
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  )
}
