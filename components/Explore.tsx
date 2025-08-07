"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import VideoPlayer from "@/components/VideoPlayer";

export default function ExplorePage() {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [selectedMainChoice, setSelectedMainChoice] = useState<"villa" | "house" | null>(null);
  const [showFollowUpChoices, setShowFollowUpChoices] = useState(false);
  const [nextVideoSrc, setNextVideoSrc] = useState<string | null>(null);

  const introVideoRef = useRef<HTMLVideoElement>(null);
  const choiceVideoRef = useRef<HTMLVideoElement>(null);

  const handleCloseModal = () => {
    setStarted(false);
    setShowChoices(false);
    setShowFollowUpChoices(false);
    setSelectedMainChoice(null);
    setNextVideoSrc(null);
  };

  const handleExploreClick = () => {
    setStarted(true);
    introVideoRef.current?.play().catch((err) => {
      console.error("Intro video playback failed:", err);
    });
  };

  const handleIntroEnd = () => {
    setShowChoices(true);
  };

  const handleSelection = (choice: "villa" | "house") => {
    setSelectedMainChoice(choice);
    setNextVideoSrc(`/videos/${choice}.mp4`);
    setShowChoices(false);
  };

  const handleFollowUp = (
    choice: "villa1" | "villa2" | "houserooms" | "villaVideo" | "houseVideo"
  ) => {
    setShowFollowUpChoices(false);
    switch (choice) {
      case "villa1":
        router.push("/accommodation/villa1rooms");
        break;
      case "villa2":
        router.push("/accommodation/villa2rooms");
        break;
      case "houserooms":
        router.push("/accommodation/houserooms");
        break;
      case "villaVideo":
        setNextVideoSrc("/videos/villa.mp4");
        setSelectedMainChoice("villa");
        break;
      case "houseVideo":
        setNextVideoSrc("/videos/house.mp4");
        setSelectedMainChoice("house");
        break;
    }
  };

  useEffect(() => {
    document.body.style.overflow = showChoices || showFollowUpChoices ? "hidden" : "";
  }, [showChoices, showFollowUpChoices]);

  useEffect(() => {
    const video = choiceVideoRef.current;
    if (!video) return;

    const onEnded = () => {
      if (selectedMainChoice === "villa" || selectedMainChoice === "house") {
        setShowFollowUpChoices(true);
      }
    };

    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, [selectedMainChoice, nextVideoSrc]);

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Poster background before start */}
      {!started && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <img
            src="/bg/bg.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Intro video */}
      {started && !nextVideoSrc && (
        <VideoPlayer
          src="/videos/explore.mp4"
          onEnded={handleIntroEnd}
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-700 opacity-100 z-10"
          muted
          playsInline
          scrollControl
          ref={introVideoRef}
        />
      )}

      {/* Explore Button */}
      {!started && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-serif font-extrabold mb-6 drop-shadow-lg">
            Discover Unique Escapes in Nature
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl text-white/80">
            Our curated video journey helps you find your perfect getaway — whether you&apos;re dreaming of a
            tranquil villa or a cozy hillside house.
          </p>
          <button
            onClick={handleExploreClick}
            aria-label="Start explore journey"
            className="w-20 h-20 rounded-full bg-white/90 text-black backdrop-blur-md shadow-xl group hover:scale-105 transition-all duration-300 relative"
          >
            <div className="absolute left-[38%] top-[30%] w-0 h-0 border-t-[16px] border-b-[16px] border-l-[24px] border-t-transparent border-b-transparent border-l-black group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      )}

      {/* Initial Option Modal */}
      {showChoices && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-md p-6">
          <div className="relative bg-white text-black rounded-2xl p-8 max-w-md w-full shadow-2xl space-y-6 text-center">
            <button
              onClick={handleCloseModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-black hover:text-gray-600 font-bold text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold">What experience would you like to explore?</h2>
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
                Explore Our Guest House
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Follow-Up Modal - Villa */}
      {showFollowUpChoices && selectedMainChoice === "villa" && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-md p-6">
          <div className="relative bg-white text-black rounded-2xl p-8 max-w-md w-full shadow-2xl space-y-4 text-center">
            <button
              onClick={handleCloseModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-black hover:text-gray-600 font-bold text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold">Which villa would you like to explore?</h2>
            <button
              onClick={() => handleFollowUp("villa1")}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg transition"
            >
              Villa 1
            </button>
            <button
              onClick={() => handleFollowUp("villa2")}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg transition"
            >
              Villa 2
            </button>
            <button
              onClick={() => handleFollowUp("houseVideo")}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg transition mt-2"
            >
              Actually... Show Me the Guest House
            </button>
          </div>
        </div>
      )}

      {/* Follow-Up Modal - House */}
      {showFollowUpChoices && selectedMainChoice === "house" && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-md p-6">
          <div className="relative bg-white text-black rounded-2xl p-8 max-w-md w-full shadow-2xl space-y-4 text-center">
            <button
              onClick={handleCloseModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-black hover:text-gray-600 font-bold text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold">Ready to explore?</h2>
            <button
              onClick={() => handleFollowUp("houserooms")}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg transition"
            >
              Explore the Guest House
            </button>
            <button
              onClick={() => handleFollowUp("villaVideo")}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg transition mt-2"
            >
              Actually... Show Me the Villas
            </button>
          </div>
        </div>
      )}

      {/* Choice Video */}
      {nextVideoSrc && (
        <VideoPlayer
          src={nextVideoSrc}
          className="absolute top-0 left-0 w-full h-full object-cover z-20"
          autoPlay
          controls
          playsInline
          scrollControl
          ref={choiceVideoRef}
        />
      )}
    </div>
  );
}