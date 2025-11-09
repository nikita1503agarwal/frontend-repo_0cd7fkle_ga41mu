import { Trophy } from 'lucide-react';

const demoLeaders = [
  { username: 'neo', flags: 3, time: '06:24' },
  { username: 'trinity', flags: 2, time: '08:11' },
  { username: 'morpheus', flags: 1, time: '12:40' },
];

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="py-16 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <Trophy className="h-6 w-6 text-emerald-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Leaderboard</h2>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {demoLeaders.map((u, i) => (
            <div key={u.username} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/60">Rank #{i + 1}</div>
              <div className="mt-1 text-white font-semibold">{u.username}</div>
              <div className="mt-2 text-sm text-white/80">Flags: {u.flags}</div>
              <div className="text-sm text-white/80">Time: {u.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
