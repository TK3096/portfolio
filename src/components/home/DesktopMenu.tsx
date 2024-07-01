'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { Mochiy_Pop_P_One } from 'next/font/google'

import { MenuItem } from '@/components/home/MenuItem'
import { BackgroundContent } from '@/components/home/BackgroundContent'

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

const MENU = [
  {
    text: 'About',
    href: '/about',
    key: 'about',
  },
  {
    text: 'Work / Project',
    href: '/work-and-porject',
    key: 'work-and-project',
  },
  {
    text: 'Hobby',
    href: '/hobby',
    key: 'hobby',
  },
]

export const DesktopMenu: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<{
    type: string
    src: string
  } | null>(null)

  const controls = useAnimation()

  const handleHover = async (type: string) => {
    let newSrc = ''
    await controls.start('hidden')

    switch (type) {
      case 'about':
        newSrc = '/videos/demo-pft-bot.mov'
        break
      case 'work-and-project':
        newSrc = '/videos/demo-pft-system.mov'
        break
      default:
        newSrc = ''
        break
    }

    setVideoSrc({ type, src: newSrc })
    controls.start('visible')
  }

  const handleLeave = () => {
    setVideoSrc(null)
    controls.start('hidden')
  }

  return (
    <div className='hidden md:block h-full px-4 py-6'>
      <motion.ul
        className={cn(
          'h-full flex justify-center items-center gap-36',
          font.className,
        )}
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <BackgroundContent src={videoSrc?.src} controls={controls} />

        {MENU.map((menu) => (
          <motion.li
            key={menu.key}
            variants={item}
            onMouseEnter={() => handleHover(menu.key)}
            onMouseLeave={handleLeave}
          >
            <Link href={menu.href}>
              <MenuItem
                text={menu.text}
                className={cn(
                  videoSrc && videoSrc.type !== menu.key && 'opacity-10',
                )}
              />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
