import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SeasonTitle = () => {
  const controls = useAnimation();

  const pathInitial = {
    strokeDashoffset: 100,
    strokeDasharray: 100,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "#FFFFFF"
  };

  const pathAnimate = {
    strokeDashoffset: 0,
    transition: { duration: 2, ease: "easeInOut" }
  };

  useEffect(() => {
    const sequence = async () => {
      await controls.start(pathAnimate);
      await controls.start({ fill: "url(#paint0_linear_86_33)", transition: { duration: 1, ease: "easeInOut" } });
    };
    sequence();
  }, [controls]);

  return (
    <svg width="953" height="195" viewBox="0 0 953 195" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_86_33)">
        <motion.path
          d="M65.0793 117.606C67.1454 129.439 75.4099 136.952 89.3094 136.952C99.2644 136.952 105.838 133.008 105.651 125.683C105.275 118.357 99.2644 114.601 82.1718 110.656C48.5502 102.955 30.8942 90.3705 30.8942 68.9579C30.8942 43.6008 52.6825 27.6352 86.1163 27.6352C116.733 27.6352 137.957 46.2304 141.151 74.5928L104.899 76.0954C103.772 63.8865 96.4469 56.7489 84.9893 56.7489C74.4708 56.7489 67.3332 61.8203 68.2724 69.7092C68.8359 77.5981 78.2274 80.979 90.812 83.6086C124.058 89.807 142.841 103.331 142.841 125.119C142.841 150.852 120.489 166.254 88.7459 166.254C53.9973 166.254 30.3307 148.222 28.4524 119.296L65.0793 117.606Z"
          initial={pathInitial}
          animate={controls}
          stroke="#FFFFFF"
          strokeWidth="2"
        />
        {/* Add other paths here, with the same `initial` and `animate` properties */}
      </g>
      <defs>
        <filter id="filter0_d_86_33" x="0.858908" y="0.041769" width="951.384" height="194.557" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="13.7967"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.00833333 0 0 0 0 0.405 0 0 0 0 1 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_86_33"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_86_33" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_86_33" x1="137.211" y1="302.91" x2="979.512" y2="-38.3256" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00C2FF"/>
          <stop offset="1" stop-color="#0038FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SeasonTitle;
