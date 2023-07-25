'use client'

import { useRef } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'

export const Main = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const opacitySection = useTransform(scrollYProgress, [0, 1], [0, 10])
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.9, 0.8])
  const x = useTransform(scrollYProgress, [0.1, 0.5, 1], ['0%', '-17%', '0%'])

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.4, 0.9],
    ['#aad5ef2d', '#71abcd3e', '#dcd9f649', '#8f83e6']
  )

  const foodImgs = [
    'breakfast',
    'ramen',
    'burrito',
    'hotdog',
    'beer',
    'fries',
    'burger',
    'salad',
    'sandwich',
    'steak',
    'boba',
    'banana-split'
  ]

  return (
    <motion.main
      ref={ref}
      style={{
        display: 'flex',
        width: '100%',
        backgroundColor,
        alignItems: 'center',
        padding: '0 0 200px 0',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <motion.section
        style={{
          opacity,
          position: 'relative',
          width: '100%',
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'start',
          justifyContent: 'right'
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.2,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: 'url("/picnic.png")'
          }}
        />
        <motion.header
          style={{
            padding: '72px 120px 0 0',
            color: '#33333',
            fontSize: '54px',
            textAlign: 'center',
            fontWeight: 'bold',
            lineHeight: '82px',
            fontFamily: 'Roboto',
            textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
          }}
        >
          O sabor do delivery em sua melhor versão
          <br />
          com Tecnologia de Ponta
        </motion.header>
      </motion.section>

      <motion.section
        style={{
          x,
          scale,
          opacity: opacitySection,
          minHeight: '100vh',
          padding: '12px',
          display: 'flex',
          gap: '144px',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'start'
        }}
      >
        <motion.header
          style={{
            fontSize: '38px',
            display: 'flex',
            fontFamily: 'Roboto',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          Explore uma seleção diversificada de pratos e restaurantes!
        </motion.header>

        <motion.div
          style={{
            display: 'grid',
            gridGap: '140px',
            gridTemplateRows: 'repeat(2, 1fr)',
            gridAutoRows: 'minmax(0, 1fr)',
            gridTemplateColumns: 'repeat(4, 1fr)'
          }}
        >
          {foodImgs.map((food) => (
            <motion.img
              key={food}
              alt={`Grupo: ${food}`}
              src={`/foods/${food}.png`}
              style={{ width: '154px', objectFit: 'contain' }}
            />
          ))}
        </motion.div>
      </motion.section>
    </motion.main>
  )
}
