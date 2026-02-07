import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { href: '#protocols', label: 'PROTOCOLS' },
  { href: '#capabilities', label: 'CAPABILITIES' },
  { href: '#uplink', label: 'UPLINK' },
];

const socialLinks = [
  { href: 'https://github.com', label: 'GITHUB', icon: Github },
  { href: 'https://linkedin.com', label: 'LINKEDIN', icon: Linkedin },
  { href: 'mailto:chandan@elykid.com', label: 'EMAIL', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-3 gap-12 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Left - Brand */}
          <div>
            <a href="#" className="font-mono text-sm tracking-wider block mb-2">
              [CHANDAN.SYS]
            </a>
            <p className="font-mono text-xs text-muted-foreground">
              Architect of The Future
            </p>
          </div>

          {/* Center - Navigation */}
          <div className="flex flex-col md:items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-xs tracking-wider link-underline inline-block"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right - Social */}
          <div className="flex flex-col md:items-end gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="font-mono text-xs tracking-wider link-underline inline-flex items-center gap-2"
              >
                <span>{link.label}</span>
                <span>→</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 CHANDAN SONI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-muted-foreground">[SYSTEM STATUS: OPERATIONAL]</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
