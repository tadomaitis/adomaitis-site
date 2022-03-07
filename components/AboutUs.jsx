import SectionTitle from './SectionTitle'

const AboutUs = () => (
  <section
    id='about'
    className='flex flex-col lg:flex-row w-full py-18 md:py-24 px-8'
  >
    <div className='lg:w-4/12 grid card rounded-box place-items-center py-8 lg:py-0'>
      <SectionTitle content='Quem somos' />
    </div>
    <div className='lg:border-2 border-primary'></div>
    <div className='md:w-4/5 lg:w-3/5 grid card rounded-box place-items-center pl-8 mx-auto'>
      <p className='mb-2'>
        A AConsultoria nasceu em 2018 com o objetivo de auxiliar o empreendedor
        na gestão do seu negócio através de métodos e modelos de gestão
        utilizados no mercado.
      </p>
      <p className='mb-2'>
        A AConsultoria tem como diferencial aplicar modelos de gestão
        personalizados conforme a sua necessidade, possibilitando assim menor
        custo de investimento e maior foco na resolução do problema.
      </p>
      <p>
        A <strong>InovaMeta</strong> é o time tecnologico da AConsultoria, que
        nasceu para apoiar empreendedores com soluções inovadoras e de baixo
        custo, levando para o seu negócio agilidade, produtividade e redução de
        custos.
      </p>
    </div>
  </section>
)

export default AboutUs
