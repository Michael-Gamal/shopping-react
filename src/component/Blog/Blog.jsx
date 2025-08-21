import './blogComponent.css'
import {blogs} from '../../assets/data' 
const Blog = () => {
  return (

    <section className="blog-section">
        <div className="blogs">
            { 
                blogs.slice(0,4).map((blog) => (
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
                    </div>
                    )   
                )
            }
        </div>
    </section>
  )
}

export default Blog
