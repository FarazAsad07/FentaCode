import React from "react";
import { Trophy, Award } from "lucide-react";

export const PointsDisplay = () => (
  <div className="bg-white/30 backdrop-blur rounded-xl border border-white/40 shadow-lg p-6 flex flex-col gap-3 items-center">
    <Trophy className="w-10 h-10 text-fuchsia-500 mb-2" />
    <div className="text-3xl font-bold text-indigo-700">100 pts</div>
    <div className="flex items-center gap-2 text-gray-700">
      <Award className="w-5 h-5 text-indigo-400" />
      <span>Challenges Solved: 1</span>
    </div>
    <button className="mt-4 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white rounded-lg px-4 py-2 font-semibold shadow hover:scale-105 transition">
      Claim Rewards
    </button>
  </div>
);
