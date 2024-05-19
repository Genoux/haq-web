import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

const ThreeDWaveGrid = ({
  waveSpeed = 0.02,
  waveFrequency = 25,
  gridSize = 100,
  gridSpacing = 2,
  minColor = 0xffffff,
  maxColor = 0x000000,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Default size if container has zero dimensions
    if (width === 0 || height === 0) {
      width = window.innerWidth;
      height = window.innerHeight;
      console.log("Default dimensions set for container");
    }

    console.log(`Container dimensions: width = ${width}, height = ${height}`);

    // Create a scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 90, 0);
    camera.lookAt(scene.position);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Composer and Passes
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Grid
    const geometry = new THREE.PlaneGeometry(
      gridSize,
      gridSize,
      gridSize / gridSpacing,
      gridSize / gridSpacing,
    );
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(minColor) },
        color2: { value: new THREE.Color(maxColor) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        void main() {
          vec3 gradientColor = mix(color1, color2, vUv.y);
          gl_FragColor = vec4(gradientColor, 1.0);
        }
      `,
      wireframe: true,
      transparent: true,
    });

    const grid = new THREE.Mesh(geometry, material);
    grid.rotation.x = -Math.PI / 2;
    scene.add(grid);

    // Window Resize
    const onWindowResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      composer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      const positionAttribute = grid.geometry.attributes.position;
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const waveX = Math.sin(
          (x * waveFrequency + performance.now() * waveSpeed) / gridSize,
        );
        const waveY = Math.sin(
          (y * waveFrequency + performance.now() * waveSpeed) / gridSize,
        );
        const z = (waveX + waveY) * 3;
        positionAttribute.setZ(i, z);
      }
      positionAttribute.needsUpdate = true;
      composer.render();
    };
    animate();

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", onWindowResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [waveSpeed, waveFrequency, gridSize, gridSpacing]);

  return (
    <div ref={containerRef} className="fixed z-0 top-0 left-0 w-full h-full" />
  );
};

export default ThreeDWaveGrid;
