import { BadgeCheck } from 'lucide-react';

export default function About({ unlocked = {} }) {
  const visible = unlocked.about || unlocked.skills || unlocked.projects || unlocked.certifications;

  return (
    <section id="about" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <BadgeCheck className="h-6 w-6 text-emerald-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">About & Unlocked Content</h2>
        </div>

        {!visible ? (
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6 text-white/70">
            Sections are locked. Capture a flag to reveal content.
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {unlocked.about && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-white font-semibold">About Me</h3>
                <p className="mt-2 text-white/80 text-sm">
                  I’m a cybersecurity learner building defenses and breaking barriers. This interactive portfolio mirrors how I approach problems: enumerate, exploit, and document.
                </p>
              </div>
            )}
            {unlocked.skills && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-white font-semibold">Skills</h3>
                <ul className="mt-2 text-white/80 text-sm list-disc list-inside space-y-1">
                  <li>Web App Security (OWASP Top 10)</li>
                  <li>Linux, Bash, and Scripting</li>
                  <li>CTFs: Enumeration, OSINT, Crypto, Forensics</li>
                  <li>Dev: React, Node, Python, FastAPI</li>
                </ul>
              </div>
            )}
            {unlocked.projects && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:col-span-2">
                <h3 className="text-white font-semibold">Projects</h3>
                <p className="mt-2 text-white/80 text-sm">
                  • Password Auditor CLI • Vulnerable Lab Walkthroughs • Secure Notes API
                </p>
              </div>
            )}
            {unlocked.certifications && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:col-span-2">
                <h3 className="text-white font-semibold">Certifications</h3>
                <p className="mt-2 text-white/80 text-sm">eJPT (in progress), HTB tracks, TryHackMe streaks.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
