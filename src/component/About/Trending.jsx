import AboutImage from '../../assets/about.png'

const Trending = () => {
  return (
        <div className="trending">  
            <div className="image">
                <img src={AboutImage} alt="" />
                <div className="box-center">
                    <p>Top View In this <br /> Week</p>
                    <h2>Trending</h2>
                </div>

            </div>
        </div>
  )
}

export default Trending
