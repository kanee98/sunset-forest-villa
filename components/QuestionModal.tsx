"use client";

type Props = {
  open: boolean;
  onSelect: (option: "villa" | "house") => void;
};

export default function QuestionModal({ open, onSelect }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-md p-6">
      <div className="bg-white text-black rounded-2xl p-8 max-w-md w-full shadow-2xl space-y-6 text-center">
        <h2 className="text-2xl font-bold">What experience would you like to explore?</h2>
        <div className="space-y-4">
          <button
            onClick={() => onSelect("villa")}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg transition"
          >
            Explore Our Villas
          </button>
          <button
            onClick={() => onSelect("house")}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg transition"
          >
            Explore Our House
          </button>
        </div>
      </div>
    </div>
  );
}