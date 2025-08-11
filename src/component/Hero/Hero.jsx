import './hero.css'
const Hero = () => {
  return (
    <section className='hero'>
        <div className="background-image">
            <div className="left">
                <div className="content">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur <br />
                        adipisicing elit. Aperiam recusandae obcaecati
                    </p>
                    <button>Explore More</button>
                </div>
            </div>
            <div className="right">
                <div className="content">
                    <div className="img" />
                    <button>Explore this product</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
