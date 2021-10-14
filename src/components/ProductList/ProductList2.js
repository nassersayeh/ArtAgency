import React from 'react'
import './productlist.css'
import Product from '../Product/Product'
import img1 from '../../img/mwjo.png'
import img2 from '../../img/areed2.jpeg'
import img3 from '../../img/areed3.jpeg'
import img4 from '../../img/areed5.jpeg'
import img5 from '../../img/areed6.jpeg'
import img6 from '../../img/areed7.jpeg'


const ProductList = () => {
    const link1 = "https://www.youtube.com/watch?v=-ns8TU1xDvQ"
    const link2 = "https://www.youtube.com/watch?v=INQ4Rj_Hm6E"
    const link3 = "https://www.youtube.com/watch?v=BsqFoLwNLLk"
    const link4 = "https://www.youtube.com/watch?v=CKJgZMwLWFc"
    const link5 = "https://www.youtube.com/watch?v=Qz9C6lYOGY8"
    const link6 = "https://www.youtube.com/watch?v=8Y7ztWxYYU4"

    return (
        <div className="p1">
            <div className="p1-texts">
                <h1 className="p1-title">
                    Some of our music production work 
                </h1>
                <p className="p1-desc">
                This Work was for Mohammad areed
                click on the song pic to listen
                </p>
            </div>
            <div className="p1-list">
                <Product img={img1} link={link1}/>
                <Product img={img2} link={link2}/>
                <Product img={img3} link={link3}/>
                <Product img={img4} link={link4}/>
                <Product img={img5} link={link5}/>
                <Product img={img6} link={link6}/>
            </div>
        </div>
    )
}

export default ProductList
