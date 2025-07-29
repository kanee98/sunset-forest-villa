import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export type MainChoice = "villa" | "house" | null;
export type FollowUpChoice = "villa1" | "villa2" | "houserooms" | "villaVideo" | "houseVideo";

export function useExploreFlow() {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [selectedMainChoice, setSelectedMainChoice] = useState<MainChoice>(null);
  const [showFollowUpChoices, setShowFollowUpChoices] = useState(false);
  const [nextVideoSrc, setNextVideoSrc] = useState<string | null>(null);

  const introVideoRef = useRef<HTMLVideoElement>(null);
  const choiceVideoRef = useRef<HTMLVideoElement>(null);

  const handleExploreClick = () => {
    setStarted(true);
    introVideoRef.current?.play().catch(console.error);
  };

  const handleIntroEnd = () => setShowChoices(true);

  const handleSelection = (choice: MainChoice) => {
    if (!choice) return;
    setSelectedMainChoice(choice);
    setNextVideoSrc(`/videos/${choice}.mp4`);
    setShowChoices(false);
  };

  const handleFollowUp = (choice: FollowUpChoice) => {
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

  // IntersectionObserver for intro video play/pause on scroll
  useEffect(() => {
    if (!started || nextVideoSrc) return;
    const video = introVideoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? video.play().catch(() => {}) : video.pause();
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [started, nextVideoSrc]);

  // Listen for end of choice video to show follow-up modal
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

  return {
    started,
    nextVideoSrc,
    showChoices,
    showFollowUpChoices,
    selectedMainChoice,
    introVideoRef,
    choiceVideoRef,
    handleExploreClick,
    handleIntroEnd,
    handleSelection,
    handleFollowUp,
  };
}