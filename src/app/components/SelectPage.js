"use client";

import { useState } from "react";
import Image from "next/image";

export default function SelectPage({ onSubmit, setCode }) {
  const moods = [
    { code: "A", label: "開心", image: "/img/mood_happy.png" },
    { code: "B", label: "悲傷", image: "/img/mood_sad.png" },
    { code: "C", label: "生氣", image: "/img/mood_angry.png" },
    { code: "D", label: "平靜", image: "/img/mood_calm.png" },
  ];

  const places = [
    { code: "1", label: "做家務", image: "/img/place_home.png" },
    { code: "2", label: "通勤", image: "/img/place_commute.png" },
    { code: "3", label: "運動", image: "/img/place_sport.png" },
    { code: "4", label: "工作讀書", image: "/img/place_study.png" },
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
    `w-40 h-40 relative rounded-lg border-2 cursor-pointer transition-all duration-300 overflow-hidden
    ${selected 
      ? "border-yellow-400 scale-110 shadow-lg" 
      : "border-gray-600 hover:scale-115 hover:border-gray-400 hover:shadow-md"}`;

  return (
    <div className="relative min-h-screen text-white" style={{ backgroundImage: 'url(/img/background%202.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="flex flex-col items-center justify-center h-screen space-y-16">
        <div>
          <div className="grid grid-cols-4 gap-8">
            {moods.map((m) => (
              <div
                key={m.code}
                className={boxStyle(selectedMood === m.code)}
                onClick={() => setSelectedMood(m.code)}
              >
                <Image
                  src={m.image}
                  alt={m.label}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    console.error(`Error loading image: ${m.image}`);
                    e.target.style.display = 'none';
                  }}
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="grid grid-cols-4 gap-8">
            {places.map((p) => (
              <div
                key={p.code}
                className={boxStyle(selectedPlace === p.code)}
                onClick={() => setSelectedPlace(p.code)}
              >
                <Image
                  src={p.image}
                  alt={p.label}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    console.error(`Error loading image: ${p.image}`);
                    e.target.style.display = 'none';
                  }}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="absolute bottom-40 right-0 cursor-pointer"
      >
        <Image
          src="/img/btn_gogo.png"
          alt="送出配對歌單"
          width={240}
          height={96}
          className="hover:scale-105 transition-transform"
        />
      </button>
    </div>
  );
}
