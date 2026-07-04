import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919090230505?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors cursor-pointer group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(34, 197, 94, 0.4)',
          '0 0 0 15px rgba(34, 197, 94, 0)',
          '0 0 0 0 rgba(34, 197, 94, 0)',
        ]
      }}
      transition={{
        boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
      }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      
      {/* Tooltip */}
      <span className="absolute right-20 whitespace-nowrap px-4 py-2 rounded-xl bg-pearl text-text-primary text-sm font-medium shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gold/10">
        Chat with us ✨
      </span>
    </motion.a>
  );
}
