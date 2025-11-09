import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] grid place-items-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
        >
          Breach the Perimeter
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
        >
          Gamified cybersecurity portfolio. Solve challenges, capture flags, and unlock my story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#challenges" className="px-5 py-3 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-black font-medium transition">
            Enter the Network
          </a>
          <a href="#about" className="px-5 py-3 rounded-md border border-white/15 text-white hover:bg-white/10 transition">
            What is this?
          </a>
        </motion.div>
      </div>
    </section>
  );
}
