import {useEffect, useContext,useState} from 'react'
import './collection.css'
import { IoIosSearch } from "react-icons/io";
import { ShopContext } from '../../ShopContext/ShopContext.jsx'
import Item from '../../component/Item/Item';
import Footer from '../../component/Footer/Footer.jsx';
import Header from '../../component/Header.jsx';

const Collection = () => {
  const { products } = useContext(ShopContext)
  
  const [searchTerm, setSearchTerm] = useState("");
  const [cateSelect, setCateSelect] = useState([]);
  const [sortType, setSortType] = useState('relevant')

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState()
    const itemsPerPage = 8;

  
  
  const categories = [ 
      "Headphones",
      "Mobiles",
      "Speakers",
      "Mouse",
      "Watches",
      "Cameras",
  ]


useEffect(() => {
    const productSearch = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProducts(productSearch ) ;
    
  }, [searchTerm, products]);


const selectedCate = (category) => {
  cateSelect.includes(category) 
    ?  setCateSelect(cateSelect.filter(item => item !== category))
    :  setCateSelect([...cateSelect, category]);
    return setCateSelect;
}

  const applyFilter = () => {
    let filtered = [...products];

      if (searchTerm) {
        filtered = filtered.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
      }

      if (cateSelect.length) {
        filtered = filtered.filter((product) => cateSelect.includes(product.category))
    }
        return filtered
    
    }
    


  useEffect(() => {
    const productSearch = products.filter((product) => cateSelect.includes(product.category));
    setFilteredProducts(productSearch) 
    
    
  }, [cateSelect, products]);


  const applySorting = ( productList ) => {
  switch (sortType) {
    case 'price-low':
      return productList.sort((a, b) => a.price - b.price)
    case 'price-high':
      return productList.sort((a, b) => b.price - a.price)
    default:
      return productList
  }
}

  
  useEffect(() => {
      const filtered = applyFilter()
      const sorted = applySorting(filtered)

      setFilteredProducts( sorted )
      setCurrentPage(1)

    },[searchTerm,products,cateSelect,sortType]);


      const getPaginatedDataProduct = () => {
    const startIndex = (currentPage - 1) * itemsPerPage     // 0   10  20 30 40
    const endIndex = startIndex + itemsPerPage              //10 20 30 40 50
    return filteredProducts.slice(startIndex, endIndex)     // 0-10 10-20 20-30 30-40 40-50

  }
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)


    
    return (
      <div className="collection">
        <Header />
      <div className="collection-container">
        <div className="fillter">
          <div className="search">
            <input type="search" 
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for products..." name="" id="" />
            <IoIosSearch />

          </div>
          <div className="fillter-cate">
            <h3>Category</h3>
            {
              categories.map((category) => (
                <label onChange={() => selectedCate(category)} className="category" key={category}>
                  <input type="checkbox" id={category} />
                  <span>{category}</span>
                </label>
              ))}
          </div>
          <div className="sort">
            <h3>Sort By</h3>
            <select 
              onChange={(e) => setSortType(e.target.value)}
              name="sort" >
              <option value="relvant">Relavent</option>
              <option value="price-low">Price: Low to High</option>
              <option  value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="items-container">
              {
              getPaginatedDataProduct().length > 0 ? (
                getPaginatedDataProduct().map((products, index) => 
                  <Item key={index}  products = {products} />
                )) : (
                  <p>
                    No products found for select filters
                  </p>
                )}
        </div>

      </div>
        {/* start pagination */}
          <div className="pagination">
              <button 
                disabled={currentPage === 1} 
                onClick={() => setCurrentPage(prev => prev - 1 )}
                className={  ` prev ${currentPage === 1 && "notactive"}`}>
                  Previous 
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button 
                key={index +   1} 
                onClick={() => setCurrentPage(index + 1)}
                className={` numpage
                ${currentPage === index + 1 && "activepage"}
                  btn-light !py-1 !px-3`}
                >
                  {index + 1}
              </button>
            ))}

            <button 
                disabled={currentPage === totalPages} 
                onClick={() => setCurrentPage(prev => prev + 1 )}
                className={`next
                  ${currentPage === totalPages && "notactive"}`}
                >
                  Next
            </button> 
          </div>
        {/* End pagination */}
        <Footer />
    </div>
  )
}

export default Collection
