'use client'

import ordering from './data/selling-products.json'
import Lottie, { LottieComponentProps } from 'lottie-react'

import { CSSProperties } from 'react'

type SellingProductsProps = Omit<LottieComponentProps, 'animationData'> & {
  styles?: CSSProperties
}

export const SellingProducts = ({ styles, ...props }: SellingProductsProps) => (
  <Lottie animationData={ordering} style={{ ...styles }} {...props} />
)
