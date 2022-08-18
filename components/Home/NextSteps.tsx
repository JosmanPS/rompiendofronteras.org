import React from 'react'
import Container from '../Container'
import NextStepCard from '../NextSteps/NextStepCard'
import SectionTitle from '../Typography/SectionTitle'
import Text from '../Typography/Text'

export default function NextSteps() {
  const nextStepsData = [
    {
      title: 'Escucha la última predicación',
      image: '',
      description: 'Escucha todas las series y predicaciones online.',
      href: '',
    },
    {
      title: 'Únete a una comunidad',
      image: '/img/gr.jpeg',
      description: 'Encuentra un grupo de amigos para crecer juntos en Jesús.',
      href: '',
    },
    {
      title: 'Planea una visita',
      image: '/img/sal.png',
      description: '¡Queremos conocerte! Infórmanos de tu visita para recibirte de la mejor manera.',
      href: '',
    },
    {
      title: 'Quiero pedir oración',
      image: '/img/intercesion.jpeg',
      description: '¿Cómo podemos orar por ti? Dios todo lo puede.',
      href: '',
    },
    {
      title: 'Quiero servir',
      image: '/img/greet1.jpeg',
      description: 'Contribuye con tus dones y talentos a la misión de Dios.',
      href: '',
    },
    {
      title: 'Quiero ofrendar',
      image: '/img/mrf-ofrenda.jpeg',
      description: 'Contribuye a lo que Dios está haciendo con tu generosidad.',
      href: '',
    },
  ]

  return (
    <section className="bg-white py-32 text-center">
      <Container>
        <SectionTitle className="mb-6">Sé parte.</SectionTitle>
        <Text className="mb-8">¿Qué deseas hacer hoy?</Text>
        <div className="grid lg:grid-cols-3 lg:gap-8">
          {nextStepsData.map((step) => (
            <NextStepCard
              title={step.title}
              image={step.image}
              description={step.description}
              href={step.href}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
