import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adomaitis consultoria</title>
        <meta name='description' content='Descubra como revolucionar o seu negócio com tecnologia e transformação digital'/>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Header />
      <div className="divider w-10/12 mx-auto mt-8"></div> 
      <AboutUs />
      <div className="divider w-10/12 mx-auto"></div> 
      <Services />
      <div className="divider w-10/12 mx-auto"></div> 
      <ContactForm />
      <div className="divider w-10/12 mx-auto"></div>       
      <Footer />
    </>
  )
}
