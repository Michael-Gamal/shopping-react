import {useContext,useEffect,useState} from 'react'
import './relatedproduct.css'
import Title from '../Title/Title.jsx'
import Item from '../Item/Item.jsx'
import { ShopContext } from '../../ShopContext/ShopContextInstance.jsx'

const RelatedProducts = ({product}) => {
    
  const { products } = useContext(ShopContext)

    const [relatedProducts, setRelatedProducts] = useState([])
  useEffect(() => {
    const data = products.filter(item => item.category === product.category);

    setRelatedProducts(data.slice(0, 5));  
    
  },[products])
  return (
    <section className="related-products">
        <div className="title">
        <Title title1 = "Related" title2 = "Products" style1= {{
            fontSize: "35px",
            marginBottom: "-20px",
        }} style2= {{
            fontWeight: 'normal',
            textDecoration: 'underline',
            color : 'rgb(255 143 156)',
        }}  />
        </div>
        <div className="items">
                {relatedProducts.map((productItem) => (
                    <Item key={productItem._id} products={productItem} />
                ))}
        </div>
    </section>
  )
}

export default RelatedProducts
