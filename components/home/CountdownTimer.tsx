"use client"
import { useState, useEffect, Fragment } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const targetDate = new Date('2026-06-11T12:00:00Z').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Use a stable skeleton during SSR to prevent CLS
  if (!isHydrated) {
    return (
      <div className="flex flex-col items-center lg:items-start w-full">
        <div className="flex items-center justify-center lg:justify-start space-x-4 mb-5 w-full">
          <div className="h-[1px] w-8 bg-indigo-500/30"></div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-400/80 uppercase">WORLD CUP KICKS OFF IN</span>
          <div className="h-[1px] w-8 bg-indigo-500/30"></div>
        </div>
        <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 md:space-x-4 w-full h-[100px] opacity-20">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-16 h-20 bg-indigo-500/10 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-4 flex flex-col items-center lg:items-start w-full">
      <div className="flex items-center justify-center lg:justify-start space-x-4 mb-5 w-full">
        <div className="h-[1px] w-8 bg-indigo-500/30"></div>
        <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-400/80 uppercase">WORLD CUP KICKS OFF IN</span>
        <div className="h-[1px] w-8 bg-indigo-500/30"></div>
      </div>

      <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 md:space-x-4 w-full tabular-nums">
        {[
          { label: "DAYS", value: timeLeft.days },
          { label: "HOURS", value: timeLeft.hours },
          { label: "MINS", value: timeLeft.mins },
          { label: "SECS", value: timeLeft.secs }
        ].map((item, idx, arr) => (
          <Fragment key={idx}>
            <div className="flex flex-col items-center">
              <div className="w-[3.25rem] h-[3.75rem] sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#0c0f1c]/80 border border-indigo-500/20 rounded-xl flex items-center justify-center shadow-[inset_0_0_20px_rgba(79,70,229,0.1)] backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1/2 bg-white/[0.02]"></div>
                <span className="text-2xl sm:text-3xl font-bold text-white font-poppins relative z-10">
                  {item.value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-[9px] text-slate-400 font-bold tracking-widest mt-2 sm:mt-3 uppercase">{item.label}</span>
            </div>
            {idx < arr.length - 1 && (
              <div className="text-lg sm:text-2xl font-bold text-indigo-500/40 mb-5 sm:mb-6">:</div>
            )}
          </Fragment>
        ))}
      </div>
      <p className="text-[11px] font-bold text-indigo-400 mt-5 tracking-[0.05em] text-center lg:text-left">
        <span className="text-slate-600 font-medium">Opening match —</span> June 11, 2026 • USA vs Mexico
      </p>
    </div>
  );
}
