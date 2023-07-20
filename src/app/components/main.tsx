'use client'

import { useRef } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'

export const Main = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start', 'end']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const opacitySection = useTransform(scrollYProgress, [0, 1], [0, 10])
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.9, 0.8])
  const x = useTransform(scrollYProgress, [0.1, 0.5, 1], ['0%', '-17%', '-12%'])

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.4, 0.9],
    ['#aad5ef2d', '#71abcd3e', '#dcd9f649', '#8f83e6']
  )

  const ourGroupImgs = ['liah', 'befoods', 'move', 'saudavel']

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
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            filter: 'brightness(0.5)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: 'url("/qse-fundo.webp")'
          }}
        />
        <motion.header
          style={{
            zIndex: 1,
            color: 'white',
            fontSize: '80px',
            textAlign: 'center',
            lineHeight: '90px',
            fontFamily: 'Roboto',
            textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
          }}
        >
          Revolucionando a Saúde Global
          <br /> com Tecnologia de Ponta
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
          gap: '80px',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'start'
        }}
      >
        <motion.header
          style={{
            fontSize: '64px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            fontFamily: 'Roboto'
          }}
        >
          Nosso Grupo
        </motion.header>

        <motion.div
          style={{
            display: 'grid',
            gridGap: '100px',
            gridTemplateRows: 'repeat(2, 1fr)',
            gridAutoRows: 'minmax(0, 1fr)',
            gridTemplateColumns: 'repeat(2, 1fr)'
          }}
        >
          {ourGroupImgs.map((group) => (
            <motion.img
              key={group}
              alt={`Grupo: ${group}`}
              src={`/our-group/${group}.png`}
              style={{ width: '400px', objectFit: 'contain' }}
            />
          ))}
        </motion.div>
      </motion.section>
    </motion.main>
  )
}
