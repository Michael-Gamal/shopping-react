import './productdescription.css'
const ProductDescription = () => {
  return (
    <section className='product-desc'>
        <div className="desc">
            <div className="head">
                <button className='active'>Description</button>
                <button>Care Guide</button>
                <button>Color Guide</button>
            </div>
            <div className="body">
                <div className="details">
                    <h3>Details</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, odio ducimus
                        commodi laudantium ipsa quidem hic fuga excepturi obcaecati dolore, minus unde recusandae quia expedita nemo 
                        quo? Dolorem, rem eos.
                        
                        <br /> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. fuga excepturi obcaecati dolore.
                    </p>
                </div>
                <div className="benefit">
                    <h3>Benefit</h3>
                    <ul>
                        <li>High-quality materials ensure long-lasting durability and comfort</li>
                        <li>Designed to meet the needs of modern, active lifestyles.</li>
                        <li>Available in a wide range of colors and trendy colors</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDescription
