import { useAnimationFrame, useMotionValue } from "framer-motion";
import type React from "react";
import { useRef } from "react";

export function useInfiniteScroll(
  trackRef: React.RefObject<HTMLDivElement | null>,
  speed: number,
  gap: number,
) {
  const x = useMotionValue(0);

  const firstItemWidth = useRef(0);

  const updateItemWidth = () => {
    const item = trackRef.current?.firstElementChild;

    if (!item) return;

    firstItemWidth.current = item.getBoundingClientRect().width;
  };

  useAnimationFrame((_, delta) => {
    const track = trackRef.current;

    if (!track) return;

    const firstItem = track.firstElementChild;

    if (!firstItem) return;

    if (firstItemWidth.current === 0) {
      updateItemWidth()
      return;
    }

    let nextX = x.get() - (speed * delta) / 1000;

    const totalWidth = firstItemWidth.current + gap;

    while (Math.abs(nextX) >= totalWidth) {
      nextX += totalWidth;
      track.appendChild(firstItem);
      updateItemWidth();
    }
    x.set(nextX);
  });

  return x;
}
