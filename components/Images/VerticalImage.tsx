import React from 'react'
import NextImage from 'next/image'

type Props = {
  url: string
}

export default function VerticalImage({ url }: Props) {
  return (
    <div className='relative w-full aspect-[4/5] border-black border-2'>
      <NextImage src={url} layout="fill" objectPosition='center center' objectFit='cover' />
    </div>
  )
}
