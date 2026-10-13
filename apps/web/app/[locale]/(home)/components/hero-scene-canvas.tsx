"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import {
  AmbientLight,
  BoxGeometry,
  type BufferGeometry,
  CanvasTexture,
  Color,
  Group,
  type Material,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";

interface Volume {
  accent: string;
  background: string;
  depth: number;
  eyebrow: string;
  height: number;
  ink: string;
  position: [number, number, number];
  rise: number;
  rotation: [number, number, number];
  title: [string, string];
  width: number;
}

interface BookPlacement {
  position: [number, number, number];
  rise: number;
  rotation: [number, number, number];
  scale: number;
  source: number;
}

const volumes: Volume[] = [
  {
    eyebrow: "SHYENA / 01",
    title: ["SOFTWARE", "SECURITY"],
    background: "#18233d",
    accent: "#9aafff",
    ink: "#f4f5f8",
    width: 1.24,
    height: 1.64,
    depth: 0.18,
    position: [-0.9, 0.08, -0.18],
    rotation: [-0.13, -0.17, -0.2],
    rise: 0.12,
  },
  {
    eyebrow: "SYSTEMS / 02",
    title: ["DEVICES &", "OPERATIONS"],
    background: "#d9d8ce",
    accent: "#415db7",
    ink: "#171b27",
    width: 1.52,
    height: 1.94,
    depth: 0.22,
    position: [0.25, 0.02, 0.38],
    rotation: [-0.12, 0.12, 0.09],
    rise: 0.1,
  },
  {
    eyebrow: "FLAGFORGE / 03",
    title: ["LEARN BY", "DOING"],
    background: "#a85532",
    accent: "#f0c8ad",
    ink: "#fff8f1",
    width: 1.08,
    height: 1.48,
    depth: 0.16,
    position: [1.1, -0.48, -0.24],
    rotation: [-0.12, 0.25, 0.23],
    rise: 0.14,
  },
];

const surroundingBooks: BookPlacement[] = [
  {
    source: 0,
    scale: 0.42,
    position: [-1.78, 1.22, -1.3],
    rotation: [0.1, -0.27, -0.42],
    rise: 0.07,
  },
  {
    source: 1,
    scale: 0.37,
    position: [-0.42, 1.63, -1.7],
    rotation: [-0.2, 0.14, 0.2],
    rise: 0.05,
  },
  {
    source: 2,
    scale: 0.4,
    position: [1.48, 1.33, -1.25],
    rotation: [0.08, 0.31, 0.38],
    rise: 0.08,
  },
  {
    source: 1,
    scale: 0.34,
    position: [-2.08, 0.12, -1.55],
    rotation: [-0.14, -0.3, 0.3],
    rise: 0.06,
  },
  {
    source: 0,
    scale: 0.35,
    position: [2.02, 0.1, -1.6],
    rotation: [0.16, 0.2, -0.34],
    rise: 0.05,
  },
  {
    source: 2,
    scale: 0.42,
    position: [-1.62, -1.24, -1.2],
    rotation: [0.18, -0.12, 0.34],
    rise: 0.07,
  },
  {
    source: 1,
    scale: 0.36,
    position: [0.05, -1.58, -1.7],
    rotation: [-0.12, 0.2, -0.18],
    rise: 0.06,
  },
  {
    source: 0,
    scale: 0.39,
    position: [1.58, -1.21, -1.25],
    rotation: [-0.13, 0.25, 0.28],
    rise: 0.08,
  },
  {
    source: 2,
    scale: 0.32,
    position: [0.32, 0.92, -1.9],
    rotation: [0.1, -0.18, -0.32],
    rise: 0.05,
  },
];

function makeCoverTexture(volume: Volume) {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 840;
  const context = canvas.getContext("2d");
  if (!context) {
    return null;
  }

  context.fillStyle = volume.background;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.strokeStyle = `${volume.accent}44`;
  context.lineWidth = 2;
  for (let index = 0; index < 7; index += 1) {
    context.beginPath();
    context.arc(556, 180, 38 + index * 29, 0, Math.PI * 2);
    context.stroke();
  }

  context.fillStyle = volume.accent;
  context.fillRect(58, 62, 8, 710);
  context.font = '500 23px "IBM Plex Mono", monospace';
  context.fillText(volume.eyebrow, 94, 103);

  context.fillStyle = volume.ink;
  context.font = '500 56px "IBM Plex Sans", sans-serif';
  context.fillText(volume.title[0], 94, 504);
  context.fillText(volume.title[1], 94, 573);

  context.fillStyle = volume.accent;
  context.fillRect(94, 625, 118, 4);
  context.font = '400 18px "IBM Plex Mono", monospace';
  context.fillText(
    volume.eyebrow.startsWith("FLAGFORGE")
      ? "CYBERSECURITY PRACTICE"
      : "SOFTWARE · DEVICES · OT",
    94,
    681
  );

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

function makeVolume(volume: Volume, textures: CanvasTexture[]) {
  const group = new Group();
  const paper = new MeshStandardMaterial({ color: "#d8d7cf", roughness: 0.94 });
  const coverEdge = new MeshStandardMaterial({
    color: volume.background,
    roughness: 0.72,
  });
  const texture = makeCoverTexture(volume);
  const coverFace = new MeshStandardMaterial({
    color: "#ffffff",
    map: texture ?? undefined,
    roughness: 0.78,
  });
  if (texture) {
    textures.push(texture);
  }

  const pages = new Mesh(
    new BoxGeometry(
      volume.width * 0.91,
      volume.height * 0.94,
      volume.depth * 0.7
    ),
    paper
  );
  pages.position.x = volume.width * 0.025;

  const coverGeometry = new BoxGeometry(
    volume.width,
    volume.height,
    volume.depth * 0.12
  );
  const frontCover = new Mesh(coverGeometry, [
    coverEdge,
    coverEdge,
    coverEdge,
    coverEdge,
    coverFace,
    coverEdge,
  ]);
  const backCover = new Mesh(coverGeometry.clone(), [
    coverEdge,
    coverEdge,
    coverEdge,
    coverEdge,
    coverEdge,
    coverFace,
  ]);
  frontCover.position.z = volume.depth * 0.41;
  backCover.position.z = -volume.depth * 0.41;

  const spine = new Mesh(
    new BoxGeometry(volume.width * 0.12, volume.height, volume.depth * 0.88),
    coverEdge
  );
  spine.position.x = -volume.width * 0.44;

  group.add(pages, frontCover, backCover, spine);
  group.position.set(...volume.position);
  group.rotation.set(...volume.rotation);
  return group;
}

function buildVolumes() {
  const group = new Group();
  const textures: CanvasTexture[] = [];
  const featuredBooks = volumes.map((volume) => {
    const book = makeVolume(volume, textures);
    group.add(book);
    return book;
  });

  const books = featuredBooks.map((book, index) => ({
    node: book,
    rise: volumes[index].rise,
  }));

  for (const placement of surroundingBooks) {
    const book = featuredBooks[placement.source].clone(true);
    book.scale.setScalar(placement.scale);
    book.position.set(...placement.position);
    book.rotation.set(...placement.rotation);
    group.add(book);
    books.push({ node: book, rise: placement.rise });
  }

  return { group, books, textures };
}

export function HeroSceneCanvas({ onReady }: { onReady: () => void }) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvas.current;
    const host = element?.parentElement;
    if (!(element && host)) {
      return;
    }

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: element,
        powerPreference: "low-power",
      });
    } catch {
      return;
    }

    const scene = new Scene();
    const camera = new PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 6.4);
    scene.add(new AmbientLight(0xff_ff_ff, 2));

    const keyLight = new PointLight(new Color("#a8b9ff"), 26);
    keyLight.position.set(-2, 3, 4.5);
    scene.add(keyLight);

    const fillLight = new PointLight(new Color("#e59d70"), 8);
    fillLight.position.set(3, -2, 2);
    scene.add(fillLight);

    const { group, books, textures } = buildVolumes();
    scene.add(group);

    const render = () => renderer.render(scene, camera);
    const timeline = gsap.timeline({
      paused: true,
      repeat: -1,
      yoyo: true,
      onUpdate: render,
    });

    books.forEach(({ node, rise }, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const duration = 4.8 + (index % 4) * 0.6;
      timeline.to(
        node.position,
        {
          y: node.position.y + rise,
          duration,
          ease: "sine.inOut",
        },
        0
      );
      timeline.to(
        node.rotation,
        {
          x: node.rotation.x + 0.045 * direction,
          y: node.rotation.y + 0.09 * direction,
          z: node.rotation.z - 0.025 * direction,
          duration: duration + 0.5,
          ease: "sine.inOut",
        },
        0
      );
    });
    timeline.to(
      group.rotation,
      { x: 0.06, y: 0.1, z: 0.025, duration: 11, ease: "sine.inOut" },
      0
    );

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (!(width && height)) {
        return;
      }
      if (width < 560) {
        camera.position.z = 7.35;
      } else if (width < 920) {
        camera.position.z = 6.85;
      } else {
        camera.position.z = 6.4;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.35));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      render();
    };
    const updateMotion = () => {
      if (motionPreference.matches || document.hidden) {
        timeline.pause();
        render();
      } else {
        timeline.play();
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    motionPreference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateMotion);
    resize();
    onReady();
    updateMotion();

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateMotion);
      timeline.kill();
      const geometries = new Set<BufferGeometry>();
      const uniqueMaterials = new Set<Material>();
      scene.traverse((object) => {
        if (object instanceof Mesh) {
          geometries.add(object.geometry);
          const meshMaterials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          for (const item of meshMaterials) {
            uniqueMaterials.add(item);
          }
        }
      });
      for (const geometry of geometries) {
        geometry.dispose();
      }
      for (const material of uniqueMaterials) {
        material.dispose();
      }
      for (const texture of textures) {
        texture.dispose();
      }
      renderer.dispose();
    };
  }, [onReady]);

  return <canvas className="hero-scene-canvas" ref={canvas} />;
}
