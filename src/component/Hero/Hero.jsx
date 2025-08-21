import './hero.css'
const Hero = () => {
  return (
    <section className='hero'>
        <div className="background-image">
            <div className="left">
                <div className="content">
                    <h1>Latest technical products</h1>
                    <p>
                        Discover the latest electronics at competitive prices. 
                        High quality with a one-year replacement warranty.
                    </p>
                    <button className="cta-button">Explore more</button>
                </div>
            </div>
            <div className="right">
                <div className="content">
                    <div className="img" />
                    <button className="cta-button">Explore morer</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
