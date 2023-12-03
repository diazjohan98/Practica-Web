import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RotatingCube = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio 1
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Usar un canvas transparente

    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0); // Establecer el color del fondo del canvas como transparente
    canvasRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(100, 100, 100); // Tamaño del cubo ajustado a 100px
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false }); // No mostrar wireframe
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Cambiar el color del material
      const hue = (Date.now() % 3000) / 3000; // Cambiar color cada 3 segundos
      material.color.setHSL(hue, 1, 0.5);

      renderer.render(scene, camera);
    };

    camera.position.z = 300; // Ajustar la posición de la cámara para centrar más el cubo

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(500, 500);
      camera.aspect = 1; // Mantener el aspect ratio 1
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default RotatingCube;
