import Image from "next/image";

export default function IntroPage({ onNext }) {
    return (
      <div className="relative h-screen" style={{
        backgroundImage: 'url(/img/background%201.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <button onClick={onNext} className="absolute bottom-24 right-0 cursor-pointer">
          <Image
            src="/img/btn_gogo.png"
            alt="開始選歌"
            width={240}
            height={96}
            className="hover:scale-105 transition-transform"
          />
        </button>
      </div>
    );
  }
  