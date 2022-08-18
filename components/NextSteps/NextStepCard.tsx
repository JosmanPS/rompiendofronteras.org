import React from 'react'
import VerticalImage from '../Images/VerticalImage'
import Text from '../Typography/Text'

type Props = {
  title: string
  image: string
  description: string,
  href: string
}

export default function NextStepCard({ title, image, description, href }: Props) {
  return (
    <div className='text-left cursor-pointer hover:scale-110 transition mb-8'>
      <VerticalImage url={image} />
      <h3 className='text-2xl font-bold tracking-tight mt-4 underline'>{ title }</h3>
      <Text>{ description }</Text>
    </div>
  )
}
