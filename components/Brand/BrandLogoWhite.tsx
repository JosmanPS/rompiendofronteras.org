import React from 'react'
import NextImage from 'next/image'

type Props = {
  size: number
}

export default function BrandLogoWhite({ size }: Props) {
  return (
    <div className="relative aspect-square">
      <NextImage src="/img/logo-white.png" height={size} width={size} />
    </div>
  )
}
