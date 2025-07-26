import React from "react";
import { ChallengeCard } from "../components/composite/ChallengeCard";
import { CodeEditor } from "../components/composite/CodeEditor";
import { TestCaseList } from "../components/composite/TestCaseList";

export const ChallengePage = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <ChallengeCard />
    </div>
    <div className="flex flex-col gap-4">
      <CodeEditor />
      <TestCaseList />
    </div>
  </div>
);
