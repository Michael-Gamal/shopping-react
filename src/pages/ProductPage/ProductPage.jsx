import React, { useContext, useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../ShopContext/ShopContext.jsx'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import './productpage.css'
import ProductDescription from '../../component/ProductDescription/ProductDescription.jsx';
import ProductFeature from '../../component/ProductFeature/ProductFeature.jsx';
import RelatedProducts from '../../component/RelatedProducts/RelatedProducts.jsx';
import { ImCheckmark } from "react-icons/im";
import Header from '../../component/Header.jsx';
import Footer from '../../component/Footer/Footer.jsx';


const ProductPage = () => {
  
  const {products,addToCart} = useContext(ShopContext)
  const {productId} = useParams()
  const [product, setProduct] = useState(null)
  const [image, setImage] = useState()
  const [color, setColor] = useState()



  //   useEffect(() => {
  //   console.log(color);
    
  // }, [color])
  



    // console.log(productId);
    
    
    
    const fetchProductData = async () => {
      const selectedProducut = products.find((item) => item._id === productId)
      
      if (selectedProducut) {
        setProduct(selectedProducut)
      }
      
    }
    
    useEffect(() => {
    fetchProductData()
  }, [productId, products])
  

if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className='product-page'>
      <Header />
      <div className="product">
        <div className="slider-product">
          <div className="side-images">
            <div className="small-image">
              {product.image.map((item,i) => (
                <img 
                  onClick={() =>  setImage(item)}
                  key={i}
                  src={item }
                  alt="product Image" 
                />
              ))
            }
            </div>
          </div>
          <div className="main-image">
                <img 
                  src={!image ? product.image[0] : image }
                  alt="product Image" 
                  className = ""
                />
              
          </div>
        </div>
        <div className="product-details">
          <h2>{product.name}</h2>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
            <span className="revwies">(123)</span>
          </div>
          <div className="price-desc">
            <p className="price">${product.price}.00</p>
            <p className="desc">{product.description}</p>
          </div>
          <div className="color-add-fav">
            <div className="colors">
              <ul> 
              {product.colors.map((item,i) => (
                <li key={i} 
                  onClick={() => setColor(item)}
                  className="color " style={{backgroundColor:`${item}`}}>
                    {
                      item === color ? (
                        <ImCheckmark  style={{ color:`${item === "White" ? "#000" : "#fff "}`}} />
                      ) : (<></>)
                    }
                  </li>
              ))}
              </ul>
            </div>
            <div className="add-fav">
              <button
                onClick={() => addToCart(product._id,color)}
                className='addToCart'>Add to cart <TbShoppingBagPlus /> </button>
              <button className='fav'> 
                <MdFavorite />

              </button>
            </div>
            <div className="free-del">
                <FaTruckFast /> <span>Free Delivery on orders over 500$</span>
            </div>
            <hr />
          </div>
          <div className="features">
              <div className="p">
                <p>Authenticy You Can Trust </p>
                <p>Enjoy Cash on Delivery For Your Convenience </p>
                <p>Easy Returns and Exchanges Whithi 7 Days </p>
              </div>
          </div>
        </div>
      </div>
      <ProductDescription />
      <ProductFeature />
      <RelatedProducts product = {product} />
      <Footer />
    </div>
  )
}

export default ProductPage
