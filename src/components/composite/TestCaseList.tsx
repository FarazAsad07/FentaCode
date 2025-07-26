import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { IconBadge } from "../atomic/IconBadge";

export const TestCaseList = () => (
  <div className="bg-white/30 backdrop-blur rounded-xl border border-white/40 shadow-lg p-4">
    <div className="font-semibold mb-2">Test Cases</div>
    <ul className="space-y-2">
      <li className="flex items-center gap-2">
        <IconBadge icon={<CheckCircle className="text-green-500" />} />
        <span className="font-mono text-sm">Input: [2,7,11,15], 9 → Output: [0,1]</span>
      </li>
      <li className="flex items-center gap-2">
        <IconBadge icon={<XCircle className="text-red-500" />} />
        <span className="font-mono text-sm">Input: [3,2,4], 6 → Output: [1,2]</span>
      </li>
    </ul>
  </div>
);
