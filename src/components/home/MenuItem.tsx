'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface MenuItemProps {
  children: React.ReactNode
  onHover: (value: string) => void
  onLeave: () => void
}

export const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  const { children, onHover, onLeave } = props

  return (
    <motion.div
      className='text-4xl cursor-pointer font-bold uppercase'
      whileHover={{ scale: 2 }}
      onMouseEnter={() => onHover('bg-emerald-500')}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  )
}
