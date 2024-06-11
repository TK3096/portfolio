'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

const PlaygroundPage = () => {
  return (
    <div className='max-w-6xl mx-auto mt-14 text-white'>
      <section className='h-screen'>
        <p className='text-4xl md:text-[200px] md:leading-relaxed'>
          Scroll down...
        </p>
      </section>
      <section className='h-[150vh] flex-col justify-center items-center'>
        <AnimateText text='Hello Guy' className='text-[200px]' />
      </section>

      <section className='h-[150vh] flex-col justify-center items-center'>
        <AnimateText
          text={[
            'This is written on',
            'a typing machine. Tick tick',
            'tick tack tack...',
          ]}
          className='text-4xl'
        />
      </section>
    </div>
  )
}

interface AnimateTextProps {
  text: string | string[]
  className?: string
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
}

export const AnimateText: React.FC<AnimateTextProps> = (
  props: AnimateTextProps,
) => {
  const { text, className } = props

  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { amount: 0.5, once: true })
  const textArray = Array.isArray(text) ? text : [text]

  useEffect(() => {
    let timmer: NodeJS.Timeout

    const show = () => {
      controls.start('visible')
      timmer = setInterval(async () => {
        console.log('hi')
        await controls.start('hidden')
        controls.start('visible')
      }, 10000)
    }

    if (isInView) {
      show()
    } else {
      controls.start('hidden')
    }

    return () => {
      clearInterval(timmer)
    }
  }, [isInView, controls])

  return (
    <div className={className}>
      <span className='sr-only'>{textArray.join(' ')}</span>
      <motion.span
        ref={ref}
        aria-hidden
        initial='hidden'
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {textArray.map((line) => (
          <span key={line} className='block'>
            {line.split(' ').map((word) => (
              <span key={word} className='inline-block'>
                {word.split('').map((ch, i) => (
                  <motion.span
                    key={`${ch}-${i}`}
                    className='inline-block'
                    variants={defaultAnimations}
                  >
                    {ch}
                  </motion.span>
                ))}
                <span className='inline-block'>&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </div>
  )
}

export default PlaygroundPage
