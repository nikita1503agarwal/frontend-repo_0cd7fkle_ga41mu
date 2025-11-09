import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, TerminalSquare, Search } from 'lucide-react';

const starterChallenges = [
  {
    id: 'enum-01',
    title: 'Enumeration 101',
    concept: 'Enumeration',
    description: 'Find the hidden path using common wordlists. Hint: /robots.txt.',
    section: 'skills',
    sampleFlag: 'ctf{robots_rule}',
  },
  {
    id: 'osint-01',
    title: 'OSINT: Shadow Profile',
    concept: 'OSINT',
    description: 'Discover the admin alias lurking in public breadcrumbs.',
    section: 'about',
    sampleFlag: 'ctf{trace_the_trail}',
  },
  {
    id: 'sql-01',
    title: 'SQL Injection – Baby',
    concept: 'SQLi',
    description: 'Bypass a simple login check using classic payloads.',
    section: 'projects',
    sampleFlag: 'ctf{1_or_1_equals_1}',
  },
];

export default function Challenges({ onUnlock }) {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState({});
  const [active, setActive] = useState(null);
  const [message, setMessage] = useState(null);

  function recordUnlock(section, via = 'remote') {
    setUnlocked((u) => ({ ...u, [section]: true }));
    if (typeof onUnlock === 'function') onUnlock(section, via);
  }

  async function submitFlag() {
    if (!active) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/validate-flag`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'demo', flag: input }),
      });

      if (!res.ok) throw new Error('Network error');
      const data = await res.json();

      if (data.success) {
        recordUnlock(data.unlockedSection, 'remote');
        setMessage({ type: 'success', text: `Access granted → ${data.unlockedSection}` });
        setInput('');
      } else {
        setMessage({ type: 'error', text: data.message || 'Invalid flag' });
      }
    } catch (e) {
      // Fallback demo mode: accept sample flag for the selected challenge only
      const ch = starterChallenges.find((c) => c.id === active);
      if (ch && input.trim() === ch.sampleFlag) {
        recordUnlock(ch.section, 'demo');
        setMessage({ type: 'success', text: `Access granted → ${ch.section} (local demo)` });
        setInput('');
      } else {
        setMessage({ type: 'error', text: 'Validation service unreachable. Try sample flags shown in the cards.' });
      }
    }
  }

  return (
    <section id="challenges" className="relative py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <TerminalSquare className="h-6 w-6 text-emerald-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Challenge Board</h2>
        </div>
        <p className="mt-2 text-white/70 max-w-3xl">Solve to unlock sections. In demo, you can use the sample flag on each card if the backend isn’t connected.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {starterChallenges.map((c) => {
            const isUnlocked = unlocked[c.section];
            return (
              <div key={c.id} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:border-emerald-400/40 transition">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">{c.title}</div>
                  {isUnlocked ? (
                    <Unlock className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Lock className="h-5 w-5 text-white/40" />
                  )}
                </div>
                <div className="mt-1 text-xs text-white/50">Concept: {c.concept}</div>
                <p className="mt-3 text-white/80 text-sm">{c.description}</p>
                <div className="mt-3 text-xs text-emerald-300/80">Sample flag: {c.sampleFlag}</div>
                <button
                  onClick={() => setActive(c.id)}
                  className={`mt-4 w-full px-3 py-2 rounded-md text-sm border transition ${active === c.id ? 'border-emerald-400 text-emerald-300 bg-emerald-400/10' : 'border-white/15 text-white/90 hover:bg-white/10'}`}
                >
                  {active === c.id ? 'Active' : 'Attempt'}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-3 text-white">
            <Search className="h-5 w-5 text-emerald-400" />
            <span className="font-medium">Flag Submission</span>
          </div>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={active ? 'Enter ctf{...}' : 'Select a challenge first'}
              disabled={!active}
              className="flex-1 rounded-md bg-black/60 border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            />
            <button onClick={submitFlag} disabled={!active}
              className="px-4 py-2 rounded-md bg-emerald-500/90 hover:bg-emerald-400 disabled:opacity-50 text-black font-medium">
              Submit Flag
            </button>
          </div>

          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className={`mt-3 text-sm ${message.type === 'success' ? 'text-emerald-300' : 'text-red-300'}`}
              >
                {message.text}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
