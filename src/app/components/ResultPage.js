"use client";

import { musicList } from "../data/musicData";
import Image from "next/image";

export default function ResultPage({ code, onReset }) {
  if (!code) return <div className="text-white text-center mt-10">無效代碼</div>;

  const music = musicList.find((item) => item.code === code);

  if (!music) return <div className="text-white text-center mt-10">找不到歌曲資料</div>;

  const youtubeUrl = `https://www.youtube.com/watch?v=${music.youtubeId}`;

  return (
    <div className="relative min-h-screen flex flex-col items-center p-6 text-white" style={{ backgroundImage: 'url(/img/background%204.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="mt-40 flex flex-col items-center">
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg mt-10"
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${music.youtubeId}?autoplay=1&rel=0&mute=1`}
            title={music.song}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg z-10"
          />
        </a>

        <Image
          src={`/img/words_${code}.png`}
          alt={`Words for ${code}`}
          width={576}
          height={288}
          className="mb-4 mt-5 z-1"
        />
      </div>

      <button
        onClick={onReset}
        className="absolute bottom-40 right-0 cursor-pointer"
      >
        <Image
          src="/img/btn_reset.png"
          alt="重新選擇"
          width={240}
          height={96}
          className="hover:scale-105 transition-transform"
        />
      </button>
    </div>
  );
}
