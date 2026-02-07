import { motion } from 'framer-motion';
import { useTextDecrypt } from '@/hooks/useTextDecrypt';

export default function Hero() {
  const line1 = useTextDecrypt('DESIGNING', 800, 200);
  const line2 = useTextDecrypt('THE FUTURE', 800, 400);
  const line3 = useTextDecrypt('ONE PIXEL', 800, 600);
  const line4 = useTextDecrypt('AT A TIME', 800, 800);

  return (
    <section className="min-h-screen relative grid-bg flex flex-col">
      {/* Top Metadata */}
      <div className="absolute top-24 left-6 md:left-12">
        <div className="metadata space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>[SYSTEM: ONLINE]</span>
          </div>
          <div>LAT: 28.6139° N</div>
          <div>LONG: 77.2090° E</div>
          <div>TIMESTAMP: 2026</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 pt-32 pb-20">
        <div className="max-w-5xl w-full">
          {/* Massive Heading */}
          <motion.h1
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="block font-mono">{line1.displayText || 'DESIGNING'}</span>
            <span className="block font-mono">{line2.displayText || 'THE FUTURE'}</span>
            <span className="block font-mono">{line3.displayText || 'ONE PIXEL'}</span>
            <span className="block font-mono">{line4.displayText || 'AT A TIME'}</span>
          </motion.h1>

          {/* Subheading */}
          <motion.div
            className="mt-12 md:mt-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <p className="font-display text-sm md:text-base tracking-wider text-center md:text-left">
              18 LIVE PROTOCOLS. ZERO COMPROMISES.
            </p>
            <p className="font-body text-sm md:text-base text-muted-foreground mt-2 text-center md:text-left">
              BUILDING THE FUTURE FOR FORWARD-THINKING COMPANIES.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <a href="#uplink" className="btn-protocol text-center">
              [ INITIATE UPLINK ]
            </a>
            <a href="#protocols" className="btn-protocol-secondary text-center">
              [ VIEW PROTOCOLS ]
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="metadata">SCROLL</span>
          <motion.div
            className="w-px h-8 bg-foreground"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
