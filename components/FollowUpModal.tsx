"use client";

import { FollowUpChoice } from "@/hooks/useExploreFlow";

type Props = {
  open: boolean;
  mainChoice: "villa" | "house" | null;
  onSelect: (option: FollowUpChoice) => void;
};

export default function FollowUpModal({ open, mainChoice, onSelect }: Props) {
  if (!open || !mainChoice) return null;

  if (mainChoice === "villa") {
    return (
      <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-md p-6">
        <div className="bg-white text-black rounded-2xl p-8 max-w-md w-full shadow-2xl space-y-4 text-center">
          <h2 className="text-2xl font-bold">Which villa would you like to explore?</h2>
          <button
            onClick={() => onSelect("villa1")}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg transition"
          >
            Villa 1
          </button>
          <button
            onClick={() => onSelect("villa2")}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg transition"
          >
            Villa 2
          </button>
          <button
            onClick={() => onSelect("houseVideo")}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg transition mt-2"
          >
            Actually... Show Me the House
          </button>
        </div>
      </div>
    );
  }

  if (mainChoice === "house") {
    return (
      <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-md p-6">
        <div className="bg-white text-black rounded-2xl p-8 max-w-md w-full shadow-2xl space-y-4 text-center">
          <h2 className="text-2xl font-bold">Ready to explore?</h2>
          <button
            onClick={() => onSelect("houserooms")}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg transition"
          >
            Explore the House
          </button>
          <button
            onClick={() => onSelect("villaVideo")}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg transition mt-2"
          >
            Actually... Show Me the Villas
          </button>
        </div>
      </div>
    );
  }

  return null;
}