import React from "react";
import "./../assets/css/slider.css";
import sample from '../assets/video/sample.mp4'
import poster from '../assets/images/poster.jpg'
const Slider = () => {
  return (
    <div>
      <section className="" id="banner">
        <video className="" id="videobcg" autoPlay loop muted poster={poster}>
          <source src={sample} type='video/mp4' />
        </video>
        <div className="text-center">
          <h1 id="fancy-text">Fancy Keeping Track Of Time</h1>
          <p className="text-white fs-2 fw-regular" id="">We Have The Perfect Solution For You.</p>
        </div>
      </section>
    </div>
  );
};

export default Slider;
