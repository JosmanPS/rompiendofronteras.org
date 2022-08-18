import React from 'react'
import NextImage from 'next/image'

type Props = {
  size: number
}

export default function BrandLogoCircleBlack({ size }: Props) {
  return (
    <div className="relative aspect-square">
      <NextImage src="/img/logo-circle-black.png" height={size} width={size} />
    </div>
  )
}
