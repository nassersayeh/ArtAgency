import React from 'react'
import './productlist2.css'
import Product from '../Product/Product'
import img1 from '../../img/areed pic.jpeg'
import { Link } from 'react-router-dom'


const ProductList = () => {
    const link1 = "https://www.youtube.com/watch?v=-ns8TU1xDvQ"
    return (
        <div className="p1">
            <div className="p1-texts">
                <h1 className="p1-title">
                    NEWS 
                </h1>
                <p className="p1-desc">
                Some News about the artists and owners of the company
                </p>
            </div>
            <div className="p1-list">
                <Product img={img1} link={"محمدالعريض"}/>
                <div className='textnews'>
                <Link to="محمدعريض" style={{ textDecoration: 'none', color:"black" }}>Artist Mohammad Areed - الفنان محمد عريض</Link>
                </div>
            </div>

        </div>
    )
}

export default ProductList
