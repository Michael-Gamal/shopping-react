import './aboutus.css'
import Title from '../Title/Title'
import Testimonial from './Testimonial.jsx'
import Trending from './Trending.jsx';
import AboutusFueaures from './AboutusFueaures.jsx';
const About = () => {
  return (
    <section className="about">
        <div className="people-says">
            <div className="title">
                <Title title1 = "People" title2 = "Says" style1= {{
                    fontSize: "35px",
                    marginBottom: "20px",
                }} style2= {{
                    fontWeight: 'normal',
                    textDecoration: 'underline',
                    color : 'rgb(255 143 156)',
                }}  />

            </div>
                <Testimonial />
        </div>
            <Trending />
        <div className="about-us">
            <div className="title">
                <Title title1 = "About" title2 = "Us" style1= {{
                    fontSize: "35px",
                    marginBottom: "20px",
                }} style2= {{
                    fontWeight: 'normal',
                    textDecoration: 'underline',
                    color : 'rgb(255 143 156)',
                }}  />

            </div>    
            <div className="contant">
                <AboutusFueaures />
            </div>
        </div>
    </section>
  )
}

export default About
