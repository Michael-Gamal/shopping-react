import {useContext, useEffect,useState} from 'react'
import Title from '../Title/Title.jsx'
import { ShopContext } from '../../ShopContext/ShopContextInstance.jsx'
import Item from '../Item/Item.jsx'
import './newarrivel.css'
const NewArrivel = () => {
  const { products } = useContext(ShopContext)
  const [PopularProducts, setPopularProducts] = useState([])
  const [leftItem, setLeftItem] = useState('0');
  useEffect(() => {
    const data = products.slice(0, 7)
    setPopularProducts(data);
  },[products])

useEffect(() => {
  const positions = [0, 270, 540];
  let index = 0;
  const interval = setInterval(() => {
    index = (index + 1) % positions.length;
    setLeftItem(`${positions[index]}px`);
  }, 3500);
  return () => clearInterval(interval);
}, []);

  
  return (
    <section className="new-arrivel">
        <div className="title">
                    <Title
                      title1 = "New" 
                      title2 = "Arrivel"
                      style1= {{
              fontSize: "35px",
              marginBottom: "15px",
            }}
            style2={{
              fontWeight: 'normal',
              textDecoration: 'underline',
            color : 'rgb(255 143 156)',
        }}  />
          <div className="desc">
            Discover the best deals on top-qulaity products, Crafted <br />
            to elevate your everday exprience
          </div>
        </div>
        <div className="products">
            <div 
              style={{right : leftItem }}
            className='slider-auto' >
            {PopularProducts.map((product) => (
                <Item products={product} key={product._id} />
              ))}
              </div>
        </div>
    </section>
  )
}

export default NewArrivel
