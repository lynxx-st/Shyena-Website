import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import anime from 'animejs';

export default function ThreeCanvas({ theme, isLoaded, progress }) {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    progress: 0,
    isLoaded: false,
    swoopActive: false,
    preloaderCompleted: false,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    scrollY: 0,
  });

  const sceneRef = useRef(null);
  const materialsRef = useRef({});

  useEffect(() => {
    stateRef.current.progress = progress;
  }, [progress]);

  useEffect(() => {
    stateRef.current.isLoaded = isLoaded;
    if (isLoaded && !stateRef.current.preloaderCompleted && !stateRef.current.swoopActive) {
      stateRef.current.swoopActive = true;
      const camera = stateRef.current.camera;
      if (camera) {
        anime({
          targets: camera.position,
          x: 0,
          y: 40,
          z: 20,
          duration: 1800,
          easing: 'easeOutCubic',
          complete: () => {
            stateRef.current.preloaderCompleted = true;
            stateRef.current.swoopActive = false;
          }
        });
      } else {
        stateRef.current.preloaderCompleted = true;
      }
    }
  }, [isLoaded]);

  // Handle color transitions on theme change
  useEffect(() => {
    const isLight = theme === 'light';
    const mats = materialsRef.current;
    if (!mats.boardMat) return;

    const tBoard = isLight ? 0x007733 : 0x002b11; // PCB Green
    const tTrace = isLight ? 0x999999 : 0x1f2428;
    const tTraceActive = isLight ? 0xff8c00 : 0xffa500;
    const tChip = isLight ? 0x333333 : 0x111111;
    const tPin = isLight ? 0xaaaaaa : 0x888888;
    const tSmdCap = isLight ? 0xc8b28f : 0x8c7853; // Brown/tan for ceramic cap
    const tSmdRes = isLight ? 0x222222 : 0x000000; // Black for resistor
    const tElectrolytic = isLight ? 0x444444 : 0x111111;
    const tGrid = isLight ? 0xcccccc : 0x222222;
    const tPart = isLight ? 0xbbbbbb : 0x333333;

    const lerpColor = (material, targetHex) => {
      if (material && material.color) {
        anime({
          targets: material.color,
          r: new THREE.Color(targetHex).r,
          g: new THREE.Color(targetHex).g,
          b: new THREE.Color(targetHex).b,
          duration: 500,
          easing: 'easeOutQuad'
        });
      }
    };

    lerpColor(mats.boardMat, tBoard);
    lerpColor(mats.traceMat, tTrace);
    lerpColor(mats.traceActiveMat, tTraceActive);
    lerpColor(mats.pulseMat, tTraceActive);
    lerpColor(mats.chipMat, tChip);
    lerpColor(mats.pinMat, tPin);
    lerpColor(mats.smdCapMat, tSmdCap);
    lerpColor(mats.smdResMat, tSmdRes);
    lerpColor(mats.electrolyticMat, tElectrolytic);
    lerpColor(mats.gridMat, tGrid);
    lerpColor(mats.pMat, tPart);
    
    if (sceneRef.current) {
      sceneRef.current.background = new THREE.Color(isLight ? 0xfafafa : 0x000000);
    }
  }, [theme]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(theme === 'light' ? 0xfafafa : 0x000000);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    // Vertical perspective
    camera.position.set(0, 60, 40);
    camera.lookAt(0, 0, 0);
    stateRef.current.camera = camera;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(20, 40, 20);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xffaa00, 1.5, 60);
    pointLight.position.set(0, 15, 0);
    scene.add(pointLight);

    // Background Grid & Particles
    const bgGroup = new THREE.Group();
    bgGroup.position.y = -10; // Well below the PCB
    scene.add(bgGroup);

    const gridHelper = new THREE.GridHelper(300, 150, 0x888888, 0x888888);
    gridHelper.material.opacity = 0.08;
    gridHelper.material.transparent = true;
    bgGroup.add(gridHelper);

    // Advanced Tech Radar Rings
    for (let i = 1; i <= 5; i++) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(i * 15, i * 15 + 0.2, 64),
        new THREE.MeshBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.1, side: THREE.DoubleSide })
      );
      ring.rotation.x = Math.PI / 2;
      bgGroup.add(ring);
      
      anime({
        targets: ring.rotation,
        z: Math.PI * 2 * (i % 2 === 0 ? 1 : -1),
        duration: anime.random(20000, 40000),
        easing: 'linear',
        loop: true
      });
    }

    const particles = [];
    const pMat = new THREE.MeshBasicMaterial({ color: 0x999999, transparent: true, opacity: 0.15, wireframe: true });
    for (let i = 0; i < 80; i++) {
      const isIco = Math.random() > 0.5;
      const geo = isIco ? new THREE.IcosahedronGeometry(Math.random() * 3 + 1) : new THREE.OctahedronGeometry(Math.random() * 3 + 1);
      const p = new THREE.Mesh(geo, pMat);
      p.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 80 + 20,
        (Math.random() - 0.5) * 200
      );
      bgGroup.add(p);
      particles.push(p);

      // Animate advanced tech holograms
      anime({
        targets: p.rotation,
        x: Math.PI * 2,
        y: Math.PI * 2,
        duration: anime.random(10000, 20000),
        easing: 'linear',
        loop: true
      });

      anime({
        targets: p.scale,
        x: [1, 1.5, 1],
        y: [1, 1.5, 1],
        z: [1, 1.5, 1],
        duration: anime.random(3000, 8000),
        easing: 'easeInOutSine',
        loop: true
      });
    }

    // Animate Grid scrolling
    anime({
      targets: gridHelper.position,
      z: [0, 2], // 300 / 150 = 2 units per cell
      duration: 1500,
      easing: 'linear',
      loop: true
    });

    const pcbGroup = new THREE.Group();
    scene.add(pcbGroup);

    // Materials
    const mBoard = new THREE.MeshStandardMaterial({ color: 0x002b11, roughness: 0.9 });
    const mTrace = new THREE.MeshStandardMaterial({ color: 0x1f2428, roughness: 0.5, metalness: 0.5 });
    const mTraceActive = new THREE.MeshStandardMaterial({ color: 0xffa500, roughness: 0.2, metalness: 0.8, emissive: 0xffa500, emissiveIntensity: 0.2 });
    const mPulse = new THREE.MeshBasicMaterial({ color: 0xffa500 });
    const mChip = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.7 });
    const mPin = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.3, metalness: 0.9 });
    const mSmdCap = new THREE.MeshStandardMaterial({ color: 0x8c7853, roughness: 0.8 });
    const mSmdRes = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.8 });
    const mElectrolytic = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 });
    const mGold = new THREE.MeshStandardMaterial({ color: 0xcca600, roughness: 0.2, metalness: 0.8 });

    materialsRef.current = {
      boardMat: mBoard, traceMat: mTrace, traceActiveMat: mTraceActive, pulseMat: mPulse,
      chipMat: mChip, pinMat: mPin, smdCapMat: mSmdCap, smdResMat: mSmdRes, electrolyticMat: mElectrolytic,
      gridMat: gridHelper.material, pMat: pMat
    };

    // 1. Motherboard PCB Base
    const boardW = 60;
    const boardH = 90; // Vertical length
    const boardMesh = new THREE.Mesh(new THREE.BoxGeometry(boardW, 0.4, boardH), mBoard);
    boardMesh.position.y = -0.2;
    pcbGroup.add(boardMesh);

    // Add mounting holes
    for(let x of [-28, 28]) {
      for(let z of [-42, 42]) {
        const holeRing = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.4, 8, 24), mGold);
        holeRing.rotation.x = Math.PI / 2;
        holeRing.position.set(x, 0, z);
        pcbGroup.add(holeRing);
      }
    }

    const componentGroup = new THREE.Group();
    pcbGroup.add(componentGroup);

    // Builders for Real Components
    const createSmd = (x, z, type, rotY = 0) => {
      const g = new THREE.Group();
      g.position.set(x, 0.1, z);
      g.rotation.y = rotY;

      const bodyMat = type === 'resistor' ? mSmdRes : mSmdCap;
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 0.6), bodyMat);
      body.position.y = 0.15;
      g.add(body);

      const end1 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.35, 0.65), mPin);
      end1.position.set(-0.6, 0.175, 0);
      g.add(end1);

      const end2 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.35, 0.65), mPin);
      end2.position.set(0.6, 0.175, 0);
      g.add(end2);

      componentGroup.add(g);
    };

    const createQFP = (x, z, size, numPinsSide) => {
      const g = new THREE.Group();
      g.position.set(x, 0, z);

      const body = new THREE.Mesh(new THREE.BoxGeometry(size, 0.8, size), mChip);
      body.position.y = 0.4;
      g.add(body);
      
      const pinW = 0.1;
      const pinL = 0.6;
      const spacing = (size - 0.4) / numPinsSide;
      
      const offset = size / 2;
      const start = -size/2 + 0.2 + spacing/2;

      for (let i = 0; i < numPinsSide; i++) {
        const pos = start + i * spacing;
        // Top edge
        const pt = new THREE.Mesh(new THREE.BoxGeometry(pinW, 0.2, pinL), mPin);
        pt.position.set(pos, 0.1, -offset - pinL/2);
        g.add(pt);
        // Bottom edge
        const pb = new THREE.Mesh(new THREE.BoxGeometry(pinW, 0.2, pinL), mPin);
        pb.position.set(pos, 0.1, offset + pinL/2);
        g.add(pb);
        // Left edge
        const pl = new THREE.Mesh(new THREE.BoxGeometry(pinL, 0.2, pinW), mPin);
        pl.position.set(-offset - pinL/2, 0.1, pos);
        g.add(pl);
        // Right edge
        const pr = new THREE.Mesh(new THREE.BoxGeometry(pinL, 0.2, pinW), mPin);
        pr.position.set(offset + pinL/2, 0.1, pos);
        g.add(pr);
      }
      
      componentGroup.add(g);
      return g;
    };

    const createSOIC = (x, z, pins) => {
      const g = new THREE.Group();
      g.position.set(x, 0, z);

      const len = pins * 0.4;
      const body = new THREE.Mesh(new THREE.BoxGeometry(2, 0.6, len), mChip);
      body.position.y = 0.3;
      g.add(body);

      const startZ = -len/2 + 0.2;
      for (let i = 0; i < pins/2; i++) {
        const pz = startZ + i * 0.8;
        const pl = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 0.2), mPin);
        pl.position.set(-1.4, 0.1, pz);
        g.add(pl);
        
        const pr = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 0.2), mPin);
        pr.position.set(1.4, 0.1, pz);
        g.add(pr);
      }
      componentGroup.add(g);
    };

    const createElectrolyticCap = (x, z) => {
      const g = new THREE.Group();
      g.position.set(x, 0, z);
      
      const body = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 3, 16), mElectrolytic);
      body.position.y = 1.5;
      g.add(body);
      
      const top = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.2, 16), mPin);
      top.position.y = 3.1;
      g.add(top);
      
      componentGroup.add(g);
    };

    // --- Place Components ---
    
    // Main CPU (QFP)
    createQFP(0, 5, 8, 16);
    
    // Southbridge/Controller
    createQFP(-10, -15, 6, 12);
    createQFP(12, -22, 5, 10);

    // RAM / Flash (SOIC)
    createSOIC(10, 15, 16);
    createSOIC(14, 15, 16);
    createSOIC(18, 15, 16);

    createSOIC(-15, 20, 8);
    createSOIC(-15, 24, 8);

    // Caps & Power Delivery
    for(let i=0; i<6; i++) {
      createElectrolyticCap(-20 + i*3, 10);
      createSmd(-20 + i*3, 13, 'resistor', Math.PI/2);
    }
    for(let i=0; i<4; i++) {
      createElectrolyticCap(-15 + i*3, -5);
    }

    // Scatter small SMDs densely
    for (let i = 0; i < 200; i++) {
      const x = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 80;
      const rot = Math.random() > 0.5 ? 0 : Math.PI/2;
      const type = Math.random() > 0.5 ? 'resistor' : 'capacitor';
      
      // Keep away from CPU
      if (Math.abs(x) < 7 && Math.abs(z - 5) < 7) continue;
      // Keep away from other big chips
      if (Math.abs(x - -10) < 5 && Math.abs(z - -15) < 5) continue;
      
      createSmd(x, z, type, rot);
    }

    // --- PCB Traces ---
    const tracePaths = [];
    
    const drawTrace = (points, isActive = false) => {
      const shape = new THREE.Shape();
      shape.moveTo(-0.1, 0);
      shape.lineTo(0.1, 0);
      shape.lineTo(0.1, 0.05);
      shape.lineTo(-0.1, 0.05);
      
      const v3Points = points.map(p => new THREE.Vector3(p[0], 0, p[1]));
      const curve = new THREE.CatmullRomCurve3(v3Points, false, 'chordal');
      const extOpts = { extrudePath: curve, steps: points.length * 4, bevelEnabled: false };
      
      const geo = new THREE.ExtrudeGeometry(shape, extOpts);
      const mesh = new THREE.Mesh(geo, isActive ? mTraceActive : mTrace);
      pcbGroup.add(mesh);
      
      if (isActive) tracePaths.push(curve);
    };

    // Draw main data bus from CPU to RAM
    for(let i=0; i<12; i++) {
      const startX = 4.5;
      const startZ = 2 + i*0.4;
      const midX = 8;
      const endX = 14;
      const endZ = 12 + i*0.4;
      drawTrace([
        [startX, startZ], 
        [midX, startZ], 
        [midX + 2, startZ + 2], 
        [midX + 2, endZ - 2], 
        [endX, endZ]
      ], i % 3 === 0);
    }

    // CPU to Southbridge
    for(let i=0; i<8; i++) {
      const z = 9 + i*0.5;
      drawTrace([
        [-4, z],
        [-7, z],
        [-10, z - 3],
        [-10, -11]
      ], i % 2 === 0);
    }

    // Random routing lines
    for(let i=0; i<30; i++) {
      const sx = (Math.random() - 0.5) * 40;
      const sz = (Math.random() - 0.5) * 60;
      const dx = (Math.random() > 0.5 ? 1 : -1) * 5;
      const dz = (Math.random() > 0.5 ? 1 : -1) * 10;
      drawTrace([
        [sx, sz],
        [sx + dx, sz],
        [sx + dx, sz + dz]
      ], Math.random() > 0.8);
    }

    // --- Anime.js Pulses ---
    const pulses = [];
    tracePaths.forEach((curve, index) => {
      const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), mPulse);
      pcbGroup.add(sphere);
      
      const ptObj = { t: 0 };
      pulses.push({ mesh: sphere, curve, ptObj });
      
      anime({
        targets: ptObj,
        t: 1,
        duration: anime.random(2000, 4000),
        delay: anime.random(0, 2000),
        easing: 'linear',
        loop: true,
        update: () => {
          const pos = curve.getPointAt(ptObj.t);
          sphere.position.copy(pos);
          sphere.position.y = 0.2; // slightly above trace
        }
      });
    });

    pcbGroup.rotation.x = -0.5;

    // --- Interactive Listeners ---
    const handleMouseMove = (e) => {
      stateRef.current.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      stateRef.current.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      stateRef.current.scrollY = window.pageYOffset;
    };

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    let animId = null;

    const animateRender = () => {
      animId = requestAnimationFrame(animateRender);
      const state = stateRef.current;

      state.mouseX += (state.targetMouseX - state.mouseX) * 0.04;
      state.mouseY += (state.targetMouseY - state.mouseY) * 0.04;

      // Parallax rotation
      pcbGroup.rotation.y = state.mouseX * 0.15;
      pcbGroup.rotation.x = -0.3 + state.mouseY * 0.1;

      const progression = state.progress;
      const fadeOpacity = Math.max(0, (progression - 0.3) / 0.7);

      Object.values(materialsRef.current).forEach(mat => {
        if (mat) {
          mat.opacity = fadeOpacity;
          mat.transparent = fadeOpacity < 1;
        }
      });

      // Camera positioning
      if (state.preloaderCompleted) {
        camera.position.x += (state.mouseX * 10 - camera.position.x) * 0.04;
        camera.position.y += (50 + -state.mouseY * 5 - camera.position.y) * 0.04;
        camera.position.z += (50 + state.scrollY * 0.03 - camera.position.z) * 0.04;
      } else if (!state.swoopActive) {
        camera.position.x = 0;
        camera.position.y = 60 - 10 * progression;
        camera.position.z = 80 - 30 * progression;
      }
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animateRender();

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      anime.remove(); 
    };
  }, []);

  return <canvas ref={canvasRef} id="three-canvas" style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }} />;
}
