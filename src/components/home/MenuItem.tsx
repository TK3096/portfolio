'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/libs/utils'

const variants = {
  hover: { scale: 2, transition: { duration: 0.3, ease: 'easeInOut' } },
}

interface MenuItemProps {
  text: string
  className?: string
}

export const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  const { text, className } = props

  return (
    <motion.p
      variants={variants}
      whileHover='hover'
      className={cn(
        'capitalize text-3xl text-white transition-opacity duration-2000 ease-in-out',
        className,
      )}
    >
      {text}
    </motion.p>
  )
}
