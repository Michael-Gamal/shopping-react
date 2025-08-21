import AboutImage from '../../assets/about.png'

const Trending = () => {
  return (
        <div className="trending">  
            <div className="image">
                <img src={AboutImage}  alt="Trending products collage" loading="lazy" />
                <div className="box-center">
                    <p>Top views this <br /> week</p> 
                    <h2>Trending</h2>
                </div>
            </div>
        </div>
  )
}

export default Trending
