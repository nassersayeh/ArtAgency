import React from 'react'
import './Intro.css'
import me from '../../img/meee.png'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

const intro = () => {
    return (
        <div className="i">
            <Link to="/"><img src={logo} alt="" className="i-icon"/></Link>
            
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello , We Are</h2>
                    <h1 className="i-name">Art Agency</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">
                                Social Media
                                
                            </div>
                            <div className="i-title-item">
                                Web Development
                            </div>
                            <div className="i-title-item">
                                Mobile App Development
                            </div>
                            <div className="i-title-item">
                                Music Production
                            </div>
                            <div className="i-title-item">
                                Event Managment
                            </div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Art Agency is a Company located in Palestine-Nablus 
                        works on Social Media and Artists as a Record Label 
                        and Music Production, owned by Mr.Nasser Sayeh.
                        </p>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-img"/>
            </div>

        </div>
    )
}

export default intro
