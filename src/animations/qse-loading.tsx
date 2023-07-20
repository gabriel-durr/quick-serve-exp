'use client'

import Lottie from 'lottie-react'
import qseDataLoading from './data/qse-data-loading.json'

export const QseLoading = () => (
  <Lottie
    animationData={qseDataLoading}
    style={{
      width: '880px',
      height: '880px',
      pointerEvents: 'none'
    }}
  />
)
