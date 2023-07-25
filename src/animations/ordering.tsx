'use client'

import ordering from './data/ordering-data.json'
import Lottie, { LottieComponentProps } from 'lottie-react'

import { CSSProperties } from 'react'

type OrderingProps = Omit<LottieComponentProps, 'animationData'> & {
  styles?: CSSProperties
}

export const Ordering = ({ styles, ...props }: OrderingProps) => (
  <Lottie animationData={ordering} style={{ ...styles }} {...props} />
)
