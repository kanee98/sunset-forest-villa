import { RefObject, useEffect } from "react";

type VideoLike =
  | (HTMLVideoElement & { play: () => Promise<void>; pause: () => void })
  | {
      playVideo: () => void;
      pauseVideo: () => void;
      getIframe?: () => HTMLElement;  // added getIframe method optional
    }
  | null;

export function useVideoScrollControl(
  videoRef: RefObject<VideoLike>,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled) return;

    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      if ("playVideo" in video && typeof video.playVideo === "function") {
        video.playVideo();
      } else if ("play" in video && typeof video.play === "function") {
        video.play().catch(() => {});
      }
    };

    const pause = () => {
      if ("pauseVideo" in video && typeof video.pauseVideo === "function") {
        video.pauseVideo();
      } else if ("pause" in video && typeof video.pause === "function") {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
        } else {
          pause();
        }
      },
      { threshold: 0.25 }
    );

    if ("tagName" in video && video.tagName === "VIDEO") {
      // Native video element
      observer.observe(video);
    } else if (
      videoRef.current &&
      typeof (videoRef.current as any).getIframe === "function"
    ) {
      // YouTube player - observe iframe element
      const iframe = (videoRef.current as any).getIframe();
      if (iframe instanceof HTMLElement) {
        observer.observe(iframe);
      }
    } else if (videoRef.current instanceof HTMLElement) {
      // fallback for other DOM elements
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [videoRef, enabled]);
}