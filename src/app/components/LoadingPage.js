"use client";

import Image from "next/image";

export default function LoadingPage({ code }) {
  if (!code) return <div className="text-white text-center mt-10">無效代碼</div>;

  return (
    <div className="relative w-full h-screen" style={{ backgroundImage: 'url(/img/background%203.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="relative w-[400px] h-[400px]">
          <Image
            src={`/loadingImages/${code}IMG.png`}
            alt="加載中圖片"
            fill
            className="rounded-xl animate-pulse object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
