"use client";

import { useEffect, useRef } from "react";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

type Props = {
  src: string;
  height?: string;
};

const SphereViewer = ({ src, height = "450px" }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new Viewer({
      container: containerRef.current,
      panorama: src,
      defaultLong: 0,
      defaultLat: 0,
      navbar: [
        'autorotate',
        'zoom',
        'fullscreen',
        'caption'
      ],
    });

    return () => viewer.destroy();
  }, [src]);

  return (
    <div
      ref={containerRef}
      className="rounded-xl overflow-hidden border border-[#D4AF37] shadow-xl"
      style={{ width: "100%", height }}
    />
  );
};

export default SphereViewer;