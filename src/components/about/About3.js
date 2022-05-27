import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://png.pngitem.com/pimgs/s/15-155786_rnf-provides-hybrid-app-development-services-building-hybrid.png" alt="" className="a-img"/>
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
