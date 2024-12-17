"use client";

import { useState, useEffect } from "react";

export default function Test() {
  const [count, setCount] = useState(0);

  const textColour =
    count < 0 ? "text-red-500" : count > 0 ? "text-green-500" : "text-white";

  console.log("Test component render begun, count is", count);

  useEffect(() => {});

  return (
    <main className="flex flex-col items-center p-24">
      <p className={`p-2 text-8xl font-bold ${textColour}`}>{count}</p>
      <div className="flex flex-row">
        <button
          className="border border-gray-800 p-6 m-6"
          onClick={() => setCount(count + 1)}
        >
          increment
        </button>

        <button
          className="border border-gray-800 p-6 m-6"
          onClick={() => setCount(count - 1)}
        >
          decrement
        </button>
      </div>
    </main>
  );
}
