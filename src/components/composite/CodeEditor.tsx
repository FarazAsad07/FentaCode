import React, { useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import { Button } from "../atomic/Button";
import { CheckCircle } from "lucide-react";

export const CodeEditor = () => {
  const starterCode = `function twoSum(nums, target) {
  // Your code here
}`;
  const editorRef = useRef<any>(null);

  return (
    <div className="bg-white/30 backdrop-blur rounded-xl border border-white/40 shadow-lg p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-indigo-700">JavaScript</span>
        <Button size="sm" variant="ghost">Reset</Button>
      </div>
      <MonacoEditor
        height="200px"
        defaultLanguage="javascript"
        defaultValue={starterCode}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          fontFamily: "Fira Mono, monospace",
          scrollBeyondLastLine: false,
        }}
        onMount={(editor) => (editorRef.current = editor)}
      />
      <div className="flex gap-2 mt-2">
        <Button iconLeft={<CheckCircle />}>Submit</Button>
      </div>
    </div>
  );
};
