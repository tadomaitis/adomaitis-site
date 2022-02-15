import SectionTitle from './SectionTitle'

const AboutUs = () => (
  <section 
    id='about'
    className="flex flex-col lg:flex-row w-full py-18 md:py-24 px-8">
    <div className="lg:w-4/12 grid card rounded-box place-items-center py-8 lg:py-0">
      <SectionTitle content={'Sobre nós'} />
    </div>
    <div className="lg:border-2 border-primary"></div>
    <div className="md:w-4/5 lg:w-3/5 grid card rounded-box place-items-center pl-8 mx-auto">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem laborum numquam accusamus laboriosam dolore incidunt veritatis magnam, temporibus impedit officia maiores nesciunt consequuntur, labore ratione tempora itaque expedita ex in.</p>
    </div>
  </section>
)

export default AboutUs
