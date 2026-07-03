import { motion } from 'framer-motion';

const floatingItems = [
  { symbol: '♈', top: '15%', left: '5%', delay: 0, duration: 7 },
  { symbol: '♉', top: '25%', right: '8%', delay: 1, duration: 6 },
  { symbol: '♊', bottom: '30%', left: '3%', delay: 0.5, duration: 8 },
  { symbol: '♋', top: '10%', right: '15%', delay: 2, duration: 7 },
  { symbol: '♌', bottom: '20%', right: '5%', delay: 1.5, duration: 6 },
  { symbol: '♍', top: '60%', left: '8%', delay: 0.8, duration: 7 },
  { symbol: '☽', top: '8%', left: '25%', delay: 1.2, duration: 9 },
  { symbol: '✧', bottom: '15%', left: '20%', delay: 0.3, duration: 5 },
  { symbol: '⟡', top: '40%', right: '3%', delay: 1.8, duration: 6 },
  { symbol: '✦', bottom: '40%', right: '12%', delay: 2.2, duration: 7 },
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-gold/10 text-2xl sm:text-3xl select-none"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          {item.symbol}
        </motion.div>
      ))}

      {/* Constellation dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full bg-gold/8"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.05, 0.2, 0.05],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
