import React, { useEffect, useRef } from 'react';

const SeasonTitle = () => {
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (!pathRef.current) return;

        const path = pathRef.current;
        const length = path.getTotalLength();

        // Set initial styles for stroke
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        path.style.transition = 'stroke-dashoffset 2s ease, fill-opacity 2s ease 2s';

        // Start the animation
        setTimeout(() => {
            path.style.strokeDashoffset = '0';
            path.style.fillOpacity = '1';
        }, 0);
    }, []);

  return (

    
        <svg width="953" height="195" viewBox="0 0 953 195" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Your SVG content */}
            <g filter="url(#filter0_d_86_33)">
    <path d="M65.0793 117.606C67.1454 129.439 75.4099 136.952 89.3094 136.952C99.2644 136.952 105.838 133.008 105.651 125.683C105.275 118.357 99.2644 114.601 82.1718 110.656C48.5502 102.955 30.8942 90.3705 30.8942 68.9579C30.8942 43.6008 52.6825 27.6352 86.1163 27.6352C116.733 27.6352 137.957 46.2304 141.151 74.5928L104.899 76.0954C103.772 63.8865 96.4469 56.7489 84.9893 56.7489C74.4708 56.7489 67.3332 61.8203 68.2724 69.7092C68.8359 77.5981 78.2274 80.979 90.812 83.6086C124.058 89.807 142.841 103.331 142.841 125.119C142.841 150.852 120.489 166.254 88.7459 166.254C53.9973 166.254 30.3307 148.222 28.4524 119.296L65.0793 117.606ZM146.868 164L194.952 30.6405H236.838L284.923 164H247.357L239.844 142.024H191.759L184.246 164H146.868ZM201.526 113.286H230.264L215.989 71.2118L201.526 113.286ZM301.651 30.6405H338.654V164H301.651V30.6405ZM394.699 117.606C396.766 129.439 405.03 136.952 418.929 136.952C428.884 136.952 435.459 133.008 435.271 125.683C434.895 118.357 428.884 114.601 411.792 110.656C378.17 102.955 360.514 90.3705 360.514 68.9579C360.514 43.6008 382.303 27.6352 415.736 27.6352C446.353 27.6352 467.578 46.2304 470.771 74.5928L434.519 76.0954C433.392 63.8865 426.067 56.7489 414.609 56.7489C404.091 56.7489 396.953 61.8203 397.892 69.7092C398.456 77.5981 407.848 80.979 420.432 83.6086C453.678 89.807 472.461 103.331 472.461 125.119C472.461 150.852 450.109 166.254 418.366 166.254C383.617 166.254 359.951 148.222 358.072 119.296L394.699 117.606ZM555.148 167.005C512.886 167.005 487.529 140.333 487.529 97.5081C487.529 54.3071 512.886 27.6352 555.148 27.6352C597.409 27.6352 622.579 54.3071 622.579 97.5081C622.579 140.333 597.409 167.005 555.148 167.005ZM525.658 97.5081C525.658 122.865 536.365 137.516 555.148 137.516C574.118 137.516 584.825 122.865 584.825 97.5081C584.825 71.9632 574.118 57.1246 555.148 57.1246C536.365 57.1246 525.658 71.9632 525.658 97.5081ZM637.692 30.6405H675.07L719.21 106.9V30.6405H756.213V164H717.707L674.694 91.6853V164H637.692V30.6405ZM818.713 74.9684C819.84 47.3574 841.628 27.6352 872.996 27.6352C903.049 27.6352 924.649 45.2913 924.649 69.897C924.649 91.3097 907.557 102.204 890.652 111.408C885.956 114.037 864.168 124.931 863.041 134.511H924.649V164H818.713C818.713 125.119 836.369 105.021 866.61 89.0557C879.758 81.5425 886.895 76.8467 886.895 69.3335C886.895 62.3838 881.261 57.1246 872.996 57.1246C863.604 57.1246 857.782 64.0743 856.091 77.0346L818.713 74.9684Z" fill="url(#paint0_linear_86_33)"/>
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
            {/* ... rest of your SVG */}
        </svg>
    );
};

export default SeasonTitle;
