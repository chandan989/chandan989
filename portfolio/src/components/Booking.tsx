import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

export default function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
    } catch (err) {
      setError('TRANSMISSION FAILED. Retry protocol.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="uplink" className="py-20 md:py-32 border-b border-border">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          [INITIATE.UPLINK]
        </motion.div>

        <motion.h2
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          LET'S BUILD
        </motion.h2>

        {/* Pre-form Copy */}
        <motion.div
          className="mb-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg">Building something ambitious? Let's talk.</p>
          <div className="font-mono text-sm text-muted-foreground space-y-1">
            <p>I work with founders and teams who:</p>
            <p>✓ Need it done right, not just done</p>
            <p>✓ Value speed without sacrificing quality</p>
            <p>✓ Want a technical partner, not just a contractor</p>
          </div>
          <div className="inline-block px-4 py-2 border border-accent font-mono text-xs text-accent">
            [CURRENT STATUS: ACCEPTING 2-3 PROJECTS/QUARTER]
          </div>
        </motion.div>

        {/* Form */}
        {isSubmitted ? (
          <motion.div
            className="p-8 border border-foreground text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="font-mono text-lg mb-2">UPLINK ESTABLISHED</div>
            <p className="text-muted-foreground">Message received. Response incoming within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Identity */}
            <div className="space-y-6">
              <div className="font-mono text-xs text-muted-foreground">&gt; IDENTITY</div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="mono-label">Name</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="terminal-input"
                    placeholder="Enter your name..."
                  />
                  {errors.name && (
                    <span className="text-destructive text-xs mt-1 block">{errors.name.message}</span>
                  )}
                </div>
                <div>
                  <label className="mono-label">Email</label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email format'
                      }
                    })}
                    type="email"
                    className="terminal-input"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <span className="text-destructive text-xs mt-1 block">{errors.email.message}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Objective */}
            <div className="space-y-6">
              <div className="font-mono text-xs text-muted-foreground">&gt; OBJECTIVE</div>
              <div>
                <label className="mono-label">Project Type</label>
                <select {...register('projectType')} className="terminal-input bg-transparent">
                  <option value="">Select type...</option>
                  <option value="ai">AI Systems</option>
                  <option value="web">Web Development</option>
                  <option value="architecture">System Architecture</option>
                  <option value="blockchain">Blockchain</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Parameters */}
            <div className="space-y-6">
              <div className="font-mono text-xs text-muted-foreground">&gt; PARAMETERS</div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="mono-label">Budget Range</label>
                  <select {...register('budget')} className="terminal-input bg-transparent">
                    <option value="">Select budget...</option>
                    <option value="<10k">&lt; $10K</option>
                    <option value="10-50k">$10K - $50K</option>
                    <option value="50-100k">$50K - $100K</option>
                    <option value="100k+">$100K+</option>
                    <option value="equity">Equity-based</option>
                  </select>
                </div>
                <div>
                  <label className="mono-label">Timeline</label>
                  <select {...register('timeline')} className="terminal-input bg-transparent">
                    <option value="">Select timeline...</option>
                    <option value="urgent">Urgent (&lt; 1 month)</option>
                    <option value="standard">Standard (1-3 months)</option>
                    <option value="flexible">Flexible (3+ months)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Transmission */}
            <div className="space-y-6">
              <div className="font-mono text-xs text-muted-foreground">&gt; TRANSMISSION</div>
              <div>
                <label className="mono-label">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  className="terminal-input min-h-[120px] resize-none"
                  placeholder="Describe your vision..."
                />
                {errors.message && (
                  <span className="text-destructive text-xs mt-1 block">{errors.message.message}</span>
                )}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 border border-destructive text-destructive font-mono text-sm">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-protocol w-full md:w-auto disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span>TRANSMITTING</span>
                  <span className="animate-pulse">...</span>
                </span>
              ) : (
                '[ TRANSMIT ]'
              )}
            </button>
          </motion.form>
        )}

        {/* Trust Signals */}
        <motion.div
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-wrap gap-6 justify-center md:justify-start font-mono text-xs text-muted-foreground">
            <span>[RESPONSE TIME: &lt;24 HOURS]</span>
            <span>[NDA AVAILABLE UPON REQUEST]</span>
            <span>[NO OBLIGATION CONSULTATION]</span>
          </div>
          <div className="mt-4 font-mono text-xs">
            <span className="text-muted-foreground">Prefer email? → </span>
            <a href="mailto:chandan@elykid.com" className="link-underline hover:text-accent">
              chandan@elykid.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
