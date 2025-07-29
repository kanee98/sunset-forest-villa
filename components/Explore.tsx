"use client";

import { useState, useRef, useEffect } from "react";

export default function ExplorePage() {
  const [started, setStarted] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [nextVideoSrc, setNextVideoSrc] = useState<string | null>(null);

  const introVideoRef = useRef<HTMLVideoElement>(null);
  const choiceVideoRef = useRef<HTMLVideoElement>(null);

  const handleExploreClick = () => {
    setStarted(true);
    introVideoRef.current?.play().catch((err) => {
      console.error("Intro video playback failed:", err);
    });
  };

  const handleIntroEnd = () => {
    setShowChoices(true);
  };

  const handleSelection = (choice: string) => {
    setNextVideoSrc(`/videos/${choice}.mp4`);
    setShowChoices(false);
  };

  useEffect(() => {
    document.body.style.overflow = showChoices ? "hidden" : "";
  }, [showChoices]);

  // Pause/play intro video based on visibility using IntersectionObserver
  useEffect(() => {
    if (!started || nextVideoSrc) return;

    const video = introVideoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.paused) {
            video.play().catch(() => {});
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [started, nextVideoSrc]);

  return (
    <div className="relative w-screen h-screen bg-black text-white overflow-hidden">
      {/* Background Poster Image */}
      {!started && (
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            poster="/bg/bg.jpg"
            muted
            playsInline
          />
        </div>
      )}

      {/* Intro Video */}
      <video
        ref={introVideoRef}
        src="/videos/explore.mp4"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          started ? "opacity-100" : "opacity-0"
        }`}
        muted
        playsInline
        onEnded={handleIntroEnd}
      />

      {/* Welcome + Explore Button */}
      {!started && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Discover Unique Escapes in Nature
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl text-white/80">
            Our curated video journey helps you find your perfect getaway — whether you're dreaming of a tranquil villa or a cozy hillside house. Each option offers its own unique charm, captured with cinematic visuals to inspire your stay.
          </p>
          <button
            onClick={handleExploreClick}
            className="bg-white/90 text-black backdrop-blur-md hover:bg-white px-8 py-4 text-xl font-semibold rounded-lg shadow-xl transition-all"
          >
            Start Exploring
          </button>
        </div>
      )}

      {/* Option Selection Modal */}
      {showChoices && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-md p-6">
          <div className="bg-white text-black rounded-2xl p-8 max-w-md w-full shadow-2xl space-y-6 text-center">
            <h2 className="text-2xl font-bold">What experience would you like to explore?</h2>
            <p className="text-sm text-gray-600 mb-4">
              Choose your ideal retreat to see what awaits.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => handleSelection("villa")}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg transition"
              >
                Explore Our Villas
              </button>
              <button
                onClick={() => handleSelection("house")}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg transition"
              >
                Explore Our House
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Final Video Preview */}
      {nextVideoSrc && (
        <video
          ref={choiceVideoRef}
          src={nextVideoSrc}
          className="absolute inset-0 w-full h-full object-cover z-20"
          autoPlay
          controls
          playsInline
        />
      )}
    </div>
  );
}
