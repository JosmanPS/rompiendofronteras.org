import React from 'react'
import NextImage from 'next/image'

type Props = {
  size: number
}

export default function BrandLogoBlack({ size }: Props) {
  return (
    <div className="relative aspect-square">
      <NextImage src="/img/logo-black.png" height={size} width={size} />
    </div>
  )
}
