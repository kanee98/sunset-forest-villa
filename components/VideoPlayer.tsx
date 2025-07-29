"use client";

import React, { useRef, useEffect, forwardRef, Ref } from "react";
import { useVideoScrollControl } from "@/hooks/useVideoScrollControl";

type Props = {
  src: string;
  onEnded?: () => void;
  className?: string;
  muted?: boolean;
  controls?: boolean;
  autoPlay?: boolean;
  scrollControl?: boolean;
  playsInline?: boolean;  // Add this prop here
};

// Forward ref so you can use ref from parent
const VideoPlayer = forwardRef<HTMLVideoElement, Props>((
  {
    src,
    onEnded,
    className,
    muted = true,
    controls = false,
    autoPlay = false,
    scrollControl = false,
    playsInline = true,  // default true
  },
  ref
) => {
  const internalRef = useRef<HTMLVideoElement>(null);
  const videoRef = (ref as React.RefObject<HTMLVideoElement>) || internalRef;

  useVideoScrollControl(videoRef, scrollControl);

  useEffect(() => {
    if (autoPlay) {
      videoRef.current?.play().catch(() => {});
    }
  }, [src, autoPlay]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted={muted}
      playsInline={playsInline}
      controls={controls}
      autoPlay={autoPlay}
      onEnded={onEnded}
      className={`absolute inset-0 w-full h-full object-cover ${className ?? ""}`}
    />
  );
});

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;