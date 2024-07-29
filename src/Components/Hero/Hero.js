import React from "react";
import './Hero.css';
import profile_img from '../../assets/profile_img.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = ()=> {
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="" style={{width:'300px',clipPath:'circle()'}} />
            <h1><span>I'm ROHINI KAWLE,</span> Frontend Web Developer</h1>
            <p>I am a Frontend Web Developer</p> 
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}
export default Hero