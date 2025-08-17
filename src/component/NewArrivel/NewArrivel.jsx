import {useContext, useEffect,useState} from 'react'
import Title from '../Title/Title.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules' ;
import 'swiper/css';
import 'swiper/css/pagination';
import { ShopContext } from '../../ShopContext/ShopContextInstance.jsx'
import Item from '../Item/Item.jsx'
import './newarrivel.css'
const NewArrivel = () => {
  const { products } = useContext(ShopContext)
  const [PopularProducts, setPopularProducts] = useState([])
  useEffect(() => {
    const data = products.slice(0, 7)
    setPopularProducts(data);  
  },[products])
  return (
    <section className="new-arrivel">
        <div className="title">
                    <Title title1 = "New" title2 = "Arrivel" style1= {{
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
        <div className="products">
      <Swiper
        autoplay= {{
          delay:4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          666: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="h-[399px] " 
      >
        {PopularProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <Item products={product}  />
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </section>
  )
}

export default NewArrivel
