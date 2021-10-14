import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://www.pngitem.com/pimgs/m/9-94498_mobile-apps-development-png-mobile-application-development-png.png" alt="" className="a-img"/>
            </div>
        </div> 
        <div className="a-right">
            <h1 className="i-title"><Link to="/mobiledevelopment" style={{ textDecoration: 'none', color:"black" }}>Mobile Development</Link></h1>
            <p className="a-sub">
                We Devlope, You use.
            </p>
            <p className="a-desc">
                In our Mobile development department we are responsible to make it
                easy to you to build your own Application with our creative team.
                We will make daily meeting and offer you the best price with the
                high level tec in the middle east.
                We can meet your needs.
            </p>

        </div> 

        </div>
    )
}

export default About
