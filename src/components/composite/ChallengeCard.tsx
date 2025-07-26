import React from "react";
import { Trophy } from "lucide-react";
import { IconBadge } from "../atomic/IconBadge";

export const ChallengeCard = () => (
  <div className="bg-white/30 backdrop-blur rounded-xl border border-white/40 shadow-lg p-6 flex flex-col gap-3">
    <div className="flex items-center gap-2 mb-2">
      <IconBadge icon={<Trophy className="w-6 h-6 text-fuchsia-500" />} />
      <h2 className="font-bold text-lg">Two Sum</h2>
      <span className="ml-auto text-indigo-600 font-semibold">+100 pts</span>
    </div>
    <p className="text-gray-700">
      Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
    </p>
    <div className="bg-white/40 rounded p-3 mt-2">
      <div className="text-xs text-gray-500">Sample Input:</div>
      <pre className="font-mono text-sm">nums = [2,7,11,15], target = 9</pre>
      <div className="text-xs text-gray-500 mt-2">Sample Output:</div>
      <pre className="font-mono text-sm">[0,1]</pre>
    </div>
  </div>
);
