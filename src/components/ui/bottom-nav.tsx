export default function BottomNav() {
  return (
    <>
      {" "}
      {/* Bottom Navigation */}
      <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-4 rounded-full border border-white/10 bg-black/80 px-6 py-3 backdrop-blur-xl shadow-2xl">
          {["🏠", "💻", "📊", "📚"].map((icon) => (
            <button
              key={icon}
              className="h-10 w-10 rounded-full bg-white/5 transition hover:bg-white/10"
            >
              {icon}
            </button>
          ))}

          <button className="flex h-10 items-center gap-2 rounded-full bg-purple-600 px-4 transition hover:bg-purple-700">
            <span className="text-lg">🚀</span>
            <span className="text-sm font-medium">Projects</span>
          </button>

          {["🔖", "⭐", "💎", "📹"].map((icon) => (
            <button
              key={icon}
              className="h-10 w-10 rounded-full bg-white/5 transition hover:bg-white/10"
            >
              {icon}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="fixed bottom-0 left-0 right-0 h-1">
          <div className="h-full w-2/3 bg-linear-to-r from-purple-500 via-pink-500 to-cyan-500" />
        </div>
      </div>
    </>
  );
}
