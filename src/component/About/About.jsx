import Title from '../Title/Title'
import Testimonial from './Testimonial.jsx'
import Trending from './Trending.jsx';
import AboutusFueaures from './AboutusFueaures.jsx';
import './aboutus.css'
const About = () => {
  return (
    <section className="about">
        <div className="people-says">
            <div className="title">
                <Title title1 = "People" title2 = "Says" />
            </div>
                <Testimonial />
        </div>
            <Trending />
        <div className="about-us">
            <div className="title">
                <Title title1 = "About" title2 = "Us" />
            </div>    
            <div className="contant">
                <AboutusFueaures />
            </div>
        </div>
    </section>
  )
}

export default About
