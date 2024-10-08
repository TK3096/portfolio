import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import { Chip } from '@/components/commons/Chip'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
}

interface SkillListProps {
  title: string
  data: string[]
}

export const SkillList: React.FC<SkillListProps> = (props: SkillListProps) => {
  const { title, data } = props

  const ref = useRef(null)

  const isInView = useInView(ref, { amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInView])

  return (
    <div className='flex flex-col items-center gap-8 md:gap-12'>
      <h3 className='font-semibold text-2lg md:text-4xl'>{title}</h3>
      <motion.div
        ref={ref}
        className='flex gap-2 justify-center flex-wrap w-[300px] md:w-[700px]'
        initial='hidden'
        animate={controls}
        variants={containerVariants}
      >
        {data.map((skill) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
          >
            <Chip className='hover:bg-red-500 hover:text-black transition-colors duration-200'>
              <span className='font-semibold text-sm'>{skill}</span>
            </Chip>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
