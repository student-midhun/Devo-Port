import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_ohv2r0h',
        'template_hs1vgdl',
        formRef.current!,
        'ItzEfySjezIY-Yuti'
      );
      setSubmitStatus('success');
      if (formRef.current) {
        (formRef.current as HTMLFormElement).reset();
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container-section bg-light-50 dark:bg-dark-600">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-heading mx-auto">Get in Touch</h2>
        <p className="max-w-2xl mx-auto mt-4">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="card">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <motion.a
                href="mailto:midhunvm23hcompe@student.mes.ac.in"
                className="flex items-center space-x-4 group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-300 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <span className="group-hover:text-primary-500 dark:group-hover:text-primary-300 transition-colors">
                  My Work Email
                </span>
              </motion.a>

              <motion.a
                href="tel:9152395393"
                className="flex items-center space-x-4 group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 rounded-full bg-secondary-500/10 text-secondary-500 dark:text-secondary-300 group-hover:bg-secondary-500 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <span className="group-hover:text-secondary-500 dark:group-hover:text-secondary-300 transition-colors">
                  +91 9152395393
                </span>
              </motion.a>

              <motion.div
                className="flex items-center space-x-4 group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 rounded-full bg-accent-500/10 text-accent-500 dark:text-accent-300 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <span>Rasayani, Maharashtra, India</span>
              </motion.div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-300">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/midhun-mohandas-684a07283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-light-200 dark:bg-dark-400 hover:bg-primary-500 hover:text-white transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://github.com/student-midhun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-light-200 dark:bg-dark-400 hover:bg-primary-500 hover:text-white transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="card space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;