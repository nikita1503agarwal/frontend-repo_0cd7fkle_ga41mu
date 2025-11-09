import { Shield, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-emerald-500/20 grid place-items-center border border-emerald-400/30">
            <Shield className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-wide">CTFfolio</p>
            <p className="text-xs text-white/60">Capture the Flag • Portfolio</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#challenges" className="hover:text-white transition">Challenges</a>
          <a href="#leaderboard" className="hover:text-white transition">Leaderboard</a>
          <a href="#about" className="hover:text-white transition">About</a>
        </nav>

        <button className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-white/15 text-white/90 hover:bg-white/10 transition">
          <User className="h-4 w-4" />
          Demo Login
        </button>
      </div>
    </header>
  );
}
