import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1135157668%2F0x0.jpg%3Ffit%3Dscale" alt="" className="a-img"/>
            </div>
        </div> 
        <div className="a-right">
            <Link to="webdevelopment" style={{ textDecoration: 'none', color:"black" }}><h1 className="i-title">Web Development</h1></Link>
            <p className="a-sub">
                We Devlope, You use.
            </p>
            <p className="a-desc">
                In our web development department we are responsible to make it
                easy to you to build your own website with our creative team.
                We will make daily meeting and offer you the best price with the
                high level tec in the middle east.
                We can meet your needs.
            </p>

        </div> 

        </div>
    )
}

export default About
