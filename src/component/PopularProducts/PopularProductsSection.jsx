import {useContext,useEffect,useState} from 'react'
import Title from '../Title/Title.jsx'
import Item from '../Item/Item.jsx'
import { ShopContext } from '../../ShopContext/ShopContextInstance.jsx'
import './popularProducts.css'

const PopularProductsSection = () => {
  const { products } = useContext(ShopContext)

    const [PopularProducts, setPopularProducts] = useState([])
  useEffect(() => {
    const data = products.filter(item => item.popular);
    setPopularProducts(data.slice(0, 5));  
  },[products])
  return (
    <section className="popular-products">
        <div className="title">
        <Title title1 = "Popular" title2 = "Products" />
        <div className="desc">
            Discover the best deals on top-qulaity products, Crafted <br />
            to elevate your everday exprience
        </div>
        </div>
        <div className="items">
                {PopularProducts.map((product) => (
                    <Item key={product._id} products={product} />
                ))}
        </div>
    </section>
  )
}

export default PopularProductsSection
