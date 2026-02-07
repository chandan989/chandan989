import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'O.R.B.I.T.E.R. - Mission Control',
    description: 'Advanced mission control system for orbital operations and satellite management.',
    url: 'https://o-r-b-i-t-e-r.vercel.app/',
    tags: ['AI', 'Real-time'],
    screenshot: '/projects/o_r_b_i_t_e_r_.png',
  },
  {
    title: 'Loopin | Where Reality Becomes Territory',
    description: 'Immersive fitness platform transforming physical reality into gamified experiences.',
    url: 'https://www.loopin.fit/',
    tags: ['Web3', 'Fitness'],
    screenshot: '/projects/loopin.png',
  },
  {
    title: 'P.A.C.T. - Programmable Asset & Compliance Toolkit',
    description: 'Comprehensive compliance and asset management infrastructure for enterprises.',
    url: 'https://p-a-c-t.vercel.app/',
    tags: ['Blockchain', 'Compliance'],
    screenshot: '/projects/p_a_c_t_.png',
  },
  {
    title: 'Fulcrum | Omni-Chain Security & Governance Layer',
    description: 'Cross-chain security infrastructure enabling seamless governance across networks.',
    url: 'https://fulcrum-infra.vercel.app/',
    tags: ['Security', 'Governance'],
    screenshot: '/projects/fulcrum.png',
  },
  {
    title: 'Agentia Protocol',
    description: 'Agentia Protocol is a trust, discovery, and payments layer for the open Agentic Economy. We give autonomous AI agents the core tools to find, hire, and pay each other for services, enabling a true on-chain network of collaborating agents.',
    url: 'https://agentia-protocol.vercel.app/',
    tags: ['AI', 'Agents'],
    screenshot: '/projects/agentia_protocol.png',
  },
  {
    title: 'Transform Protocol - Biological Software Evolution',
    description: 'Bio-inspired computing protocols for adaptive system evolution.',
    url: 'https://ditto-kappa.vercel.app/',
    tags: ['Biotech', 'AI'],
    screenshot: '/projects/ditto_kappa.png',
  },
  {
    title: 'Heru Pharmaceutical Network',
    description: 'Decentralized pharmaceutical supply chain and verification network.',
    url: 'https://heru-delta.vercel.app/',
    tags: ['Healthcare', 'Blockchain'],
    screenshot: '/projects/heru_delta.png',
  },
  {
    title: 'Node Gateway',
    description: 'N.O.D.E. is not a platform; it is a living economic organism, a protocol for self-sovereign communities. Built on the hyper-efficient Hedera Hashgraph, N.O.D.E. enables neighborhoods to form, fund, and operate their own micro-economies with unprecedented transparency and speed.',
    url: 'https://n-o-d-e.vercel.app/',
    tags: ['Infrastructure', 'Network'],
    screenshot: '/projects/n_o_d_e_.png',
  },
  {
    title: 'M.E.R.I.D.I.A.N. - Your Data. Your Rules. Your Profit.',
    description: 'M.E.R.I.D.I.A.N. is a truly decentralized data marketplace that gives users complete sovereignty over their digital identity and data while creating new economic opportunities for underrepresented communities.',
    url: 'https://m-e-r-i-d-i-a-n.vercel.app/',
    tags: ['Data', 'Privacy'],
    screenshot: '/projects/m_e_r_i_d_i_a_n_.png',
  },
  {
    title: 'R.A.T.C.H.E.T.',
    description: 'Progressive enhancement system for legacy infrastructure modernization.',
    url: 'https://ratchet-one.vercel.app/',
    tags: ['DevOps', 'Migration'],
    screenshot: '/projects/ratchet_one.png',
  },
  {
    title: 'Z.E.N.I.T.H.',
    description: 'Z.E.N.I.T.H. is more than a protocol. It is a precision observatory for finance, inspired by celestial mechanics and built for the ascent of digital assets.',
    url: 'https://z-e-n-i-t-h.vercel.app/',
    tags: ['Analytics', 'Performance'],
    screenshot: '/projects/z_e_n_i_t_h_.png',
  },
  {
    "title": "F.O.R.G.E.",
    description: 'Development forge for rapid prototyping and deployment.',
    url: 'https://f-o-r-g-e.vercel.app/',
    tags: ['DevTools', 'CI/CD'],
    screenshot: '/projects/f_o_r_g_e_.png',
  },
  {
    title: 'QuackGuard - Multi-Agent Moderation Framework',
    description: 'AI-powered content moderation using multi-agent coordination.',
    url: 'https://quack-shield.vercel.app/',
    tags: ['AI', 'Moderation'],
    screenshot: '/projects/quack_shield.png',
  },
  {
    title: 'H.E.L.I.X.',
    description: 'Helix 🛡️ — AI-Powered Government Procurement Fraud Detection Preventing corruption with advanced ML, ICP blockchain, and citizen oversight.',
    url: 'https://h-e-l-i-x.vercel.app/',
    tags: ['Artificial Intelligence', 'Blockchain', 'Icp', 'Internet Computer'],
    screenshot: '/projects/h_e_l_i_x.png',
  },
  {
    title: 'Sentinel',
    description: 'Autonomous security monitoring and threat detection system.',
    url: 'https://sentinel-gray.vercel.app/',
    tags: ['Security', 'AI'],
    screenshot: '/projects/sentinel.png',
  },
  {
    title: 'ARGOS | Adaptive Reputation-Gated Oracle System',
    description: 'Reputation-based oracle network for trustworthy data feeds.',
    url: 'https://argos-kappa.vercel.app/',
    tags: ['Oracle', 'Blockchain'],
    screenshot: '/projects/argos.png',
  },
  {
    title: 'Red Médica',
    description: 'Medical network connecting healthcare providers across regions.',
    url: 'https://red-medica.vercel.app/',
    tags: ['Healthcare', 'Network'],
    screenshot: '/projects/red_medica.png',
  },
  {
    title: 'STELLAR - Satellite-Powered Agricultural Finance',
    description: 'Satellite data-driven financial solutions for agricultural enterprises.',
    url: 'https://stellar-kappa-six.vercel.app/',
    tags: ['AgTech', 'Finance'],
    screenshot: '/projects/stellar.png',
  },
];

export default function Projects() {
  return (
    <section id="protocols" className="py-20 md:py-32 border-b border-border grid-bg-fine">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          [ACTIVE.PROTOCOLS]
        </motion.div>

        <motion.h2
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          18 LIVE SYSTEMS
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.url}
              title={project.title}
              description={project.description}
              url={project.url}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
