import React from 'react'
import './productlist.css'
import Product from '../Product/Product'
import img1 from '../../img/Screen Shot 2021-09-20 at 3.17.19 PM.png'
import img2 from '../../img/Screen Shot 2021-09-20 at 3.57.21 PM.png'
import img3 from '../../img/Screen Shot 2021-09-20 at 5.56.56 PM.png'
const ProductList = () => {
    return (
        <div className="p1">
            <div className="p1-texts">
                <h1 className="p1-title">
                    Some of our social media work 
                </h1>
                <p className="p1-desc">
                This Work was for Baristo Resturent in Palestine
                </p>
            </div>
            <div className="p1-list">
                <Product img={img1}/>
                <Product img={img2}/>
                <Product img={img3}/>

            </div>
        </div>
    )
}

export default ProductList
