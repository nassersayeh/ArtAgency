import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://www.adorama.com/alc/wp-content/uploads/2018/08/shutterstock_442098151.jpg" alt="" className="a-img"/>
            </div>
        </div> 
        <div className="a-right">
            <h1 className="i-title"><Link to="/musicproduction" style={{ textDecoration: 'none' , color:"black" }}>Music Production</Link></h1>
            <p className="a-sub">
                We Produce, You Listen.
            </p>
            <p className="a-desc">
                In our music production department we are responsible to make it
                easy to you to make your own music with our creative team.
                We will make creative music and offer you the best price with the
                high level songs in the middle east.
                We can meet your needs.
            </p>

        </div> 

        </div>
    )
}

export default About
