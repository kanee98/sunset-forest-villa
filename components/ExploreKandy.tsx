"use client";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

import { useEffect, useRef } from "react";
import { useVideoScrollControl } from "@/hooks/useVideoScrollControl";

export default function ExploreKandy() {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useVideoScrollControl(playerRef, true);

  useEffect(() => {
    const loadYouTubeAPI = () =>
      new Promise<void>((resolve) => {
        if (window.YT && window.YT.Player) {
          resolve();
          return;
        }
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        window.onYouTubeIframeAPIReady = () => resolve();
        document.body.appendChild(tag);
      });

    loadYouTubeAPI().then(() => {
      playerRef.current = new window.YT.Player("kandy-video", {
        videoId: "p9-FEqUtLF4",
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          showinfo: 0,
          disablekb: 1,
          iv_load_policy: 3,
          fs: 0,
        },
        events: {
          onReady: (event: any) => {
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
    });

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] bg-black overflow-hidden"
    >
      <div
        id="kandy-video"
        className="absolute top-1/2 left-1/2 max-w-none max-h-none
                   -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "calc(100vh * 16 / 9 * 1.1)", 
          height: "calc(100vh * 1.1)",          
          minWidth: "calc(100vh * 16 / 9 * 1.1)",
          minHeight: "calc(100vh * 1.1)",
        }}
      />
    </section>
  );
}
