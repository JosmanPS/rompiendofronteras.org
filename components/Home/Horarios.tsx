import React from 'react'
import WhiteButton from '../Button/WhiteButton'
import Container from '../Container'
import SectionTitle from '../Typography/SectionTitle'
import Text from '../Typography/Text'

export default function Horarios() {
  return (
    <section className="w-full py-32 text-center bg-[#b4bab6] text-[#4c5950]">
      <Container>
        <div className='mx-auto max-w-xl'>
          <SectionTitle className='mb-6'>Eres bienvenido.</SectionTitle>
          <Text className='mb-8'>Sé parte de nuestras reuniones presenciales todos los <b>domingos</b> a las <b>9:30 A.M.</b> en Av. República de Panamá, Col. Palmira, Tegucigalpa, Honduras.</Text>
          <WhiteButton href='https://goo.gl/maps/sWRtZXXRvUHRp7oHA' blank>Cómo llegar</WhiteButton>
        </div>
      </Container>
    </section>
  )
}
