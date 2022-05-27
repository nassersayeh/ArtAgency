import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://png.pngitem.com/pimgs/s/3-36866_social-media-hd-png-download.png" alt="" className="a-img"/>
            </div>
        </div> 
        <div className="a-right">
            <h1 className="i-title"><Link to="socialmedia" style={{ textDecoration: 'none', color:"black" }}>Social Media</Link></h1>
            <p className="a-sub">
                We Manage, You Grow.
            </p>
            <p className="a-desc">
                In our social media department we are responsible to make it
                easy to you to build your audience  with our creative team.
                We will make daily designes and offer you the best price with the
                high level design in the middle east.
                We can meet your needs.
            </p>

        </div> 

        </div>
    )
}

export default About
