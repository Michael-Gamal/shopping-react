import React,{useContext,useEffect,useState} from 'react'
import './PopularProducts.css'
import Title from '../Title/Title'
import Item from '../Item/Item.jsx'
import { ShopContext } from '../../ShopContext/ShopContext.jsx'

const PopularProducts = () => {
  const { products } = useContext(ShopContext)

    const [PopularProducts, setPopularProducts] = useState([])
  useEffect(() => {
    const data = products.filter(item => item.popular);

    setPopularProducts(data.slice(0, 5));  
  },[products])
  return (
    <section className="popular-products">
        <div className="title">
        <Title title1 = "Popular" title2 = "Products" style1= {{
            fontSize: "35px",
            marginBottom: "20px",
        }} style2= {{
            fontWeight: 'normal',
            textDecoration: 'underline',
            color : 'rgb(255 143 156)',
        }}  />
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

export default PopularProducts
