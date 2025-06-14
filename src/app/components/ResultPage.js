"use client";

import { musicList } from "../data/musicData";

export default function ResultPage({ code, onReset }) {
  if (!code) return <div className="text-white text-center mt-10">無效代碼</div>;

  const music = musicList.find((item) => item.code === code);

  if (!music) return <div className="text-white text-center mt-10">找不到歌曲資料</div>;

  const youtubeUrl = `https://www.youtube.com/watch?v=${music.youtubeId}`;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white">
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 w-full max-w-xl aspect-video rounded-lg overflow-hidden shadow-lg"
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${music.youtubeId}?autoplay=1&rel=0`}
          title={music.song}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </a>

      <h2 className="text-3xl font-bold mb-2 text-center">{music.song}</h2>
      <p className="max-w-xl text-center whitespace-pre-line">{music.message}</p>

      <button
        onClick={onReset}
        className="mt-12 px-8 py-3 bg-red-500 rounded-full hover:bg-red-400 transition"
      >
        重新選擇
      </button>
    </div>
  );
}
