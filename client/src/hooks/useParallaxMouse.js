import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useParallaxMouse(intensity = 12) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const raf = useRef(0);
  const reduced = useReducedMotion();

  const onMove = useCallback(
    (e) => {
      if (reduced) return;
      const el = containerRef.current;
      if (!el) return;
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const nx = (e.clientX - cx) / (rect.width / 2);
        const ny = (e.clientY - cy) / (rect.height / 2);
        setOffset({
          x: Math.max(-1, Math.min(1, nx)) * intensity,
          y: Math.max(-1, Math.min(1, ny)) * intensity,
        });
      });
    },
    [intensity, reduced]
  );

  const onLeave = useCallback(() => {
    if (reduced) return;
    setOffset({ x: 0, y: 0 });
  }, [reduced]);

  useEffect(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return { containerRef, offset, onMove, onLeave };
}
