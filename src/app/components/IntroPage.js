export default function IntroPage({ onNext }) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-100 to-blue-100 text-center p-4">
        <h1 className="text-3xl font-bold mb-4">今天的你，想聽什麼樣的歌？</h1>
        <p className="mb-6 text-lg">
          我們每天都有不同的情緒，也忙著做不同的事。<br />
          讓這台「一日情緒歌單」來推薦你一首剛剛好的歌 🎧
        </p>
        <button onClick={onNext} className="px-6 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition">
          開始選歌！
        </button>
      </div>
    );
  }
  