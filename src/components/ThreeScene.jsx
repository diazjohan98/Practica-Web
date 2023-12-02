import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const canvasWidth = 500;
    const canvasHeight = 400;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setClearColor(0x000000, 0);

    const geometry = new THREE.BoxGeometry(300, 300, 300); // Tamaño del cubo
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5, linewidth: 10 });

    const cube = new THREE.LineSegments(edges, lineMaterial);
    scene.add(cube);

    camera.position.z = 800;

    const colors = [0xff0000, 0x00ff00, 0x0000ff];
    let colorIndex = 0;

    const changeColor = () => {
      lineMaterial.color.setHex(colors[colorIndex]);
      colorIndex = (colorIndex + 1) % colors.length;
    };

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);

      const currentTime = Date.now();
      if (currentTime % 3000 < 20) {
        changeColor();
      }
    };

    animate();

    const handleResize = () => {
      // No se actualiza el tamaño del renderer en el redimensionamiento de la ventana
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '500px', height: '400px' }} />;
};

export default ThreeScene;
