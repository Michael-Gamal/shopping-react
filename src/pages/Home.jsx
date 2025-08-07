import Hero from '../component/Hero/Hero.jsx'
import Features from '../component/Features/Features.jsx'
import NewArrivel from '../component/NewArrivel/NewArrivel.jsx'   
import PopularProductsSection from '../component/PopularProducts/PopularProductsSection.jsx'
import Banner from '../component/Banner/Banner.jsx'
import About from '../component/About/About.jsx'
import Blog from '../component/Blog/Blog.jsx'
import NewLetter from '../component/NewLetter/NewLetter.jsx'
import Footer from '../component/Footer/Footer.jsx'
import Header from '../component/Header.jsx'
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Features />
      <NewArrivel /> 
      <PopularProductsSection />
      <Banner />
      <About />
      <Blog />
      <NewLetter />
      <Footer />
    </div>
  )
}

export default Home
