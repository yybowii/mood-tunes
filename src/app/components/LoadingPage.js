"use client";

import Image from "next/image";

export default function LoadingPage({ code }) {
  if (!code) return <div className="text-white text-center mt-10">無效代碼</div>;

  return (
    <div className="relative w-full h-screen" style={{ backgroundImage: 'url(/img/background%203.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="flex flex-col justify-center items-center h-full">
        {/* 顯示對應 code 的圖片 */}
        <Image
          src={`/loadingImages/${code}.jpg`}
          alt="加載中圖片"
          width={400}
          height={400}
          className="rounded-xl animate-pulse"
        />
        <div className="mt-4 w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}
