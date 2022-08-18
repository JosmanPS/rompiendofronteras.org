import React from 'react'
import WhiteButton from '../Button/WhiteButton'
import Container from '../Container'

export default function Hero() {
  return (
    <section className="min-h-[600px] w-full relative py-40 overflow-hidden">
      <iframe
        className="absolute -z-50 aspect-video top-[50%] left-[50%] min-w-full min-h-full translate-x-[-50%] translate-y-[-50%]"
        src="https://www.youtube.com/embed/y_HD5icyAlA?autoplay=1&mute=1&loop=1&rel=0&controls=0&modestbranding=1"
      ></iframe>
      <div className="absolute bg-black/50 -z-30 aspect-video top-[50%] left-[50%] h-full w-full translate-x-[-50%] translate-y-[-50%]"></div>
      <Container>
        <div className="grid text-center lg:text-left lg:grid-cols-2">
          <div>
            <h2 className="text-6xl text-white font-black mb-8 uppercase">
              El Reino de Dios está aquí
            </h2>
            <p className="text-2xl text-neutral-100 font-semibold mb-8">
              Experimentemos juntos la Presencia de Dios
            </p>
            <div>
              <WhiteButton className="mb-2 lg:mb-0 lg:mr-2">
                Quiero asistir
              </WhiteButton>
              <WhiteButton>Ver online</WhiteButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
