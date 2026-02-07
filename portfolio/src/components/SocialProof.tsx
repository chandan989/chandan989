import { motion } from 'framer-motion';

export default function SocialProof() {
  return (
    <section className="border-y border-border py-8 md:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Deployed For */}
          <div className="text-center md:text-left">
            <span className="metadata block mb-2">[DEPLOYED FOR]</span>
            <div className="font-mono text-sm">
              Startups → Scale-ups → Enterprise
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-border" />

          {/* Impact Metrics */}
          <div className="text-center md:text-right">
            <span className="metadata block mb-2">[IMPACT METRICS]</span>
            <div className="font-mono text-sm flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
              <span>18+ Production Systems</span>
              <span className="hidden sm:inline">|</span>
              <span>500K+ Users Impacted</span>
              <span className="hidden sm:inline">|</span>
              <span>3 Continents</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
