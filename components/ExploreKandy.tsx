"use client";

declare global {
  interface Window {
    YT?: {
      Player: {
        new (elementId: string, options: PlayerOptions): Player;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

import { useEffect, useRef } from "react";

interface Player {
  mute(): void;
  playVideo(): void;
  pauseVideo(): void;
  destroy(): void;
}

interface PlayerOptions {
  videoId: string;
  playerVars?: Record<string, number | string>;
  events?: {
    onReady?: (event: PlayerEvent) => void;
    onStateChange?: (event: PlayerStateEvent) => void;
  };
}

interface PlayerEvent {
  target: Player;
}

interface PlayerStateEvent {
  data: number;
  target: Player;
}

export const PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
} as const;

type PlayerState = typeof PlayerState[keyof typeof PlayerState];

export default function ExploreKandy() {
  const playerRef = useRef<Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      if (window.YT && window.YT.Player) {
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
            loop: 1,
            playlist: "p9-FEqUtLF4", // needed for loop to work
          },
          events: {
            onReady: (event) => {
              event.target.mute();
              event.target.playVideo();
            },
            onStateChange: (event) => {
              if (event.data === PlayerState.ENDED) {
                event.target.playVideo();
              }
            },
          },
        });
      }
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[90vh] bg-black overflow-hidden"
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