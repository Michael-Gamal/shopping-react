import './item.css' // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom'

const scroltop = () => {
  window.scrollTo({
    top: 0,
    behavior : "smooth"
  })
}
const Item = ({products}) => {
  return (
    <div className='items'>
      <Link 
        to={`/product/${products._id}`}
        className="item"
        onClick={scroltop}>
        <div className="image">
            <img src={products.image[0]} alt={products.name} className="product-image" />
        </div>
        <div className="details">
            <h3 className="title">{products.name}</h3>
            <div className="cate-price">
                <span className="cate">{products.category}</span>
                <span className="price">${products.price}.00</span>
            </div>
            <p className="desc">{products.description}</p>
            
        </div>
      </Link>
    </div>
  )
}

export default Item
