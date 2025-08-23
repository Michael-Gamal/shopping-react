import {blogs} from '../../assets/data'
import Header from '../../component/Header'
import Footer from '../../component/Footer/Footer'
import '../../component/Blog/blogComponent.css'
const Blog = () => {
  return (
    <div className="blog-section" style={{backgroundColor: '#f9f9f9'}}>
        <Header />
            <div className="blogs">
            { 
                blogs.map((blog) => (
                    <div className="blog" key={blog.title}>
                        <div className="blog-image">
                            <img src={blog.image} alt={blog.title} />
                        </div>
                        <div className="blog-content">
                            <p className='cate' >{blog.category}</p>
                            <h3 className="blog-title">{blog.title}</h3>
                            <p className="blog-description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae,
                                hic expedita sint molestiae repellat eos, sequi reprehenderit fugiat accusamus mollitia?
                                <button className='readmore'>Continue Reading </button>
                            </p>
                        </div>
                    </div>)   
                )
            }
        </div>
        <Footer />
    </div>
  )
}

export default Blog
