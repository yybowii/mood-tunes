"use client";

import { useState } from "react";

export default function SelectPage({ onSubmit, setCode }) {
  const moods = [
    { code: "A", label: "開心" },
    { code: "B", label: "悲傷" },
    { code: "C", label: "生氣" },
    { code: "D", label: "平靜" },
  ];

  const places = [
    { code: "1", label: "做家務" },
    { code: "2", label: "通勤" },
    { code: "3", label: "運動" },
    { code: "4", label: "工作讀書" },
  ];

  const [selectedMood, setSelectedMood] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");

  const handleSubmit = () => {
    if (!selectedMood || !selectedPlace) {
      alert("請選擇一個情緒與一個情境！");
      return;
    }
    const selectedCode = `${selectedMood}${selectedPlace}`;
    setCode(selectedCode); // 設定選擇結果
    onSubmit();            // 切換到 loading 頁
  };

  const boxStyle = (selected) =>
    `w-24 h-24 flex items-center justify-center rounded-lg border cursor-pointer transition-all text-white 
    ${selected ? "bg-blue-500 border-blue-700 scale-105 shadow-md" : "bg-gray-700 hover:bg-gray-600"}`;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">選擇你的心情 🎧</h2>
        <div className="grid grid-cols-4 gap-4">
          {moods.map((m) => (
            <div
              key={m.code}
              className={boxStyle(selectedMood === m.code)}
              onClick={() => setSelectedMood(m.code)}
            >
              {m.label}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">選擇你正在做的事 🛠️</h2>
        <div className="grid grid-cols-4 gap-4">
          {places.map((p) => (
            <div
              key={p.code}
              className={boxStyle(selectedPlace === p.code)}
              onClick={() => setSelectedPlace(p.code)}
            >
              {p.label}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-8 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-400 transition"
      >
        送出配對歌單！
      </button>
    </div>
  );
}
