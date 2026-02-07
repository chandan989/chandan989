import { motion } from 'framer-motion';

const skills = [
  'AI & Robotics',
  'Web Development',
  'System Architecture',
  'React / Next.js',
  'Data Sovereignty',
  'Blockchain Systems',
];

export default function Profile() {
  return (
    <section id="capabilities" className="py-20 md:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          [OPERATOR.PROFILE]
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              CHANDAN SONI
            </h2>
            <p className="font-mono text-sm text-muted-foreground mb-8">
              Architect of The Future
            </p>

            <div className="space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                Experienced Founder with a demonstrated history of working in the 
                information technology industry. Skilled in AI, Robotics, and Web 
                Development. Strong entrepreneurship professional with a focus in 
                Computer Science.
              </p>
              <p className="font-medium">
                "Democratizing intelligence and reclaiming data sovereignty. Building 
                systems where users own their data, not corporations."
              </p>
            </div>

            {/* Value Proposition */}
            <motion.div
              className="mt-12 p-6 border border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="font-mono text-sm leading-relaxed">
                "I architect systems that don't just work—they scale, adapt, and own 
                their future. From AI pipelines to blockchain infrastructure, I build 
                what others say is impossible."
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a href="#uplink" className="btn-protocol-secondary inline-block">
                [ AVAILABLE FOR SELECT PROJECTS ]
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="section-header mb-6">[TECH.STACK]</div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="glass-card p-4 md:p-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="glass-card-content block font-mono text-sm">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
