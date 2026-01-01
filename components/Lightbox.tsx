'use client';

import Image from 'next/image';
import { useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type LightboxProps = {
  src: string | null;
  alt: string;
  onClose: () => void;
};

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (src) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [src, onKeyDown]);

  return (
    <AnimatePresence>
      {src ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-muted focus-ring"
            onClick={onClose}
            aria-label="Close image"
          >
            Close
          </button>
          <motion.div
            className="relative w-[90vw] max-w-4xl aspect-[4/3]"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
          >
            <Image src={src} alt={alt} fill className="object-contain" />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
