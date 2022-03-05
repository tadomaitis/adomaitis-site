import Image from 'next/image'

const Hero = () => {
  return (
    <div className='hero min-h-screen bg-slate-50'>
      <div className='flex-col hero-content lg:flex-row-reverse max-w-7xl'>
        <div className='w-full md:w-2/3 rounded-lg overflow-hidden block'>
          <Image
            src='/images/hero.jpg'
            alt='Big building with blue like windows'
            layout='intrinsic'
            width={2400}
            height={3600}
            className='rounded-xl'
            priority
          />
        </div>
        <div className='md:w-2/3 max-w-lg py-8 md:py-0'>
          <h1 className='mb-5 text-5xl font-bold'>AC Consultoria!</h1>
          <p className='mb-5'>
            Criando pontes entre o seu negócio e a tecnologia
          </p>
          <a href='#contact' className='btn btn-primary hover:font-bold'>
            Fale conosco!
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
