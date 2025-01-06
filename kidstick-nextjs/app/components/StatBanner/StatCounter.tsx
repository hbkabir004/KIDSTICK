'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface StatProps {
  value: number
  label: string
  duration?: number
}

export function StatCounter({ value, label, duration = 2 }: StatProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16.67)

      return () => clearInterval(timer)
    }
  }, [inView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-4"
    >
      <span className="text-4xl md:text-5xl font-bold text-gray-800">
        {count}
        {label === 'Year of Experience' ? '+' : ''}
      </span>
      <span className="mt-2 text-sm md:text-base text-gray-600 text-center">
        {label}
      </span>
    </motion.div>
  )
}

