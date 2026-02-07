import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description?: string;
  url: string;
  tags?: string[];
  index: number;
  screenshot?: string;
}

export default function ProjectCard({ title, description, url, tags, index, screenshot }: ProjectCardProps) {
  // Generate screenshot URL using a service or use placeholder
  const screenshotUrl = screenshot || `https://image.thum.io/get/width/800/crop/600/noanimate/${url}`;
  
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card block group interactive overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      {/* Screenshot with Chromatic Aberration */}
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <div className="chromatic-image absolute inset-0">
          <img 
            src={screenshotUrl}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
            loading="lazy"
            onError={(e) => {
              // Fallback to placeholder on error
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
        </div>
        {/* Chromatic aberration overlay layers */}
        <div className="chromatic-layer chromatic-red absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <img 
            src={screenshotUrl}
            alt=""
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="chromatic-layer chromatic-blue absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <img 
            src={screenshotUrl}
            alt=""
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>

      <div className="glass-card-content p-6 md:p-8">
        {/* Project Number */}
        <div className="font-mono text-xs text-muted-foreground mb-4">
          [{String(index + 1).padStart(2, '0')}]
        </div>

        {/* Title */}
        <h3 className="font-display text-lg md:text-xl font-semibold mb-3 leading-tight">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        <div className="flex items-center gap-2 font-mono text-xs group-hover:text-accent transition-colors">
          <span>VIEW LIVE SYSTEM</span>
          <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.a>
  );
}
