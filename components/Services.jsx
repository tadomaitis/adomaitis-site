import SectionTitle from './SectionTitle'
import Card from './Card'

const Services = () => {
  return (
    <section id='services' className='px-11'>
      <div className="py-8 md:py-12 lg:py-18 grid place-items-center">
        <SectionTitle content='Nossos Serviços' />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pb-16">
        <Card
          title='Card #1'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Fugit libero accusantium tempora minima impedit enim esse, repellendus
           voluptatibus quae nemo.'
          imagePath='/images/card1.jpg'
        />
        <Card
          title='Card #2'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Fugit libero accusantium tempora minima impedit enim esse, repellendus
           voluptatibus quae nemo.'
          imagePath='/images/card2.jpg'
        />
        <Card
          title='Card #3'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Fugit libero accusantium tempora minima impedit enim esse, repellendus
           voluptatibus quae nemo.'
          imagePath='/images/card3.jpg'
        />
      </div>
    </section>
  )
}

export default Services
