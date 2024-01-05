import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass';

const Waves = ({ waveSpeed = 0.1, waveFrequency = 24, gridSize = 220, gridSpacing = 6, minColor = 0xfffffff, maxColor = 0xffffff }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    if (width === 0 || height === 0) {
      width = window.innerWidth;
      height = window.innerHeight;
      console.log('Default dimensions set for container');
    }

    // Create a scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, width / height, 0.1, 1000);
    camera.position.set(25, 45, 45 );
    camera.lookAt(scene.position);
    
    // Create a WebGLRenderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Create effect composer and passes
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Grid size and spacing
   // const gridSize = 100;
  //  const gridSpacing = 4;

    // Create a wireframe grid with custom shader material
    const geometry = new THREE.PlaneGeometry(gridSize, gridSize, gridSize / gridSpacing, gridSize / gridSpacing);

    const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  
  const fragmentShader = `
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;
    void main() {
      float fade = 1.0 - smoothstep(0.2, 0.5, length(vUv - 0.5));
  
      // Create a color gradient based on the vUv.y coordinate
      vec3 gradientColor = mix(color1, color2, vUv.y);
  
      // Create an opacity gradient based on the vUv.y coordinate
      float opacityGradient = mix(.05, 0.12, vUv.y); // Change 0.2 and 1.0 to desired min and max opacity values
      float finalOpacity = fade * opacityGradient;
  
      gl_FragColor = vec4(gradientColor, finalOpacity);
    }
  `; 
    
  
  const material = new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color(minColor) }, // Red color
      color2: { value: new THREE.Color(maxColor) }, // Blue color
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    wireframe: true,
  });

    const grid = new THREE.Mesh(geometry, material);
    grid.rotation.x = -Math.PI / 2;
    scene.add(grid);

    // Resize canvas when the window is resized
    const onWindowResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      composer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', onWindowResize);

    const bokehPass = new BokehPass(scene, camera, {
      focus: 0.01, // Adjust focus distance (0.0 - 1.0)
      aperture: .05, // Adjust aperture size (0.0 - 1.0)
      maxblur: 0.01, // Adjust maximum blur (0.0 - 1.0)
      width: width,
      height: height,
    });
    //composer.addPass(bokehPass);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update grid vertices for waving effect
      const positionAttribute = grid.geometry.attributes.position;
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const waveX = Math.sin((x * waveFrequency + performance.now() * waveSpeed) / gridSize);
        const waveY = Math.sin((y * waveFrequency + performance.now() * waveSpeed) / gridSize);
        const z = (waveX + waveY) * 3;
        positionAttribute.setZ(i, z);
      }
      positionAttribute.needsUpdate = true;

      // Render the scene with DOF
      composer.render();
    };
    animate();

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  },  [waveSpeed, waveFrequency, gridSize, gridSpacing]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default Waves;