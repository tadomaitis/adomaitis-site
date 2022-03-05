import SectionTitle from './SectionTitle'
import Card from './Card'

const Services = () => {
  return (
    <section id='services' className='px-11'>
      <div className='py-8 md:py-12 lg:py-18 grid place-items-center'>
        <SectionTitle content='Nossos serviços' />
        <h3 className='mt-2 md:text-center'>
          Cada serviço é pensado e desenvolvido de forma personalizada de acordo
          com o seu negócio.
          <br /> Alguns dos serviços solicitados...
        </h3>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pb-16'>
        <Card
          title='Cartão de Apresentação Digital'
          imagePath='/images/card1.jpg'
        />
        <Card
          title='Criação e atualização de Sites'
          imagePath='/images/card2.jpg'
        />
        <Card
          title='Automatização das Atividades e Processos'
          imagePath='/images/card3.jpg'
        />
        <Card
          title='Indicadores estratégicos para tomada de decisão'
          imagePath='/images/card4.jpg'
        />
        <Card
          title='Criação de fluxo de trabalho'
          imagePath='/images/card5.jpg'
        />
      </div>
    </section>
  )
}

export default Services
