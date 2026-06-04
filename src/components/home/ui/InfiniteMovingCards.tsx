"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) => {
  const [duration, setDuration] = useState(30);
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    switch (speed) {
      case "fast":
        setDuration(15);
        break;
      case "normal":
        setDuration(25);
        break;
      case "slow":
        setDuration(35);
        break;
    }
  }, [speed]);

  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      controls.start({
        x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        transition: {
          x: {
            repeat: Infinity,
            duration: duration,
            ease: "linear",
          },
        },
      });
    }
  }, [controls, direction, duration, isMounted]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <motion.div
        className="flex items-stretch space-x-6"
        animate={controls}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="w-[360px] max-w-full flex-shrink-0 rounded-xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col"
          >
            <div className="flex-1 mb-6">
              <svg
                className="w-8 h-8 text-brand/40 mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-600 italic text-[15px] leading-relaxed">
                &quot;{item.quote}&quot;
              </p>
            </div>
            <div className="flex items-center">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-semibold text-gray-900">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};