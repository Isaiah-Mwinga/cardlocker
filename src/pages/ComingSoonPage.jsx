import React, { useState, useEffect } from 'react';
import '../tailwind.css';

function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countdownDate = new Date('December 25, 2023 23:59:59').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-countdown-bg bg-cover">
      <img src="/src/images/Brand Logo.png" alt="Brand Logo" className="mb-[-5rem] w-1/3 mt-[-5rem]" />
      <label className="block text-white mb-10 text-lg md:text-xl font-integralcf-regular">
        We're Launching Soon
      </label>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
          <div className="flex items-center space-x-0 relative" key={unit}>
            {/* Left Black Circle for each card with increased negative margin and z-index */}
            <div className="bg-black w-3 h-3 rounded-full mx-[-2.5] absolute z-10 left-[-0.5rem]"></div>

            <div className="flex flex-col items-center bg-gradient-timer p-6 w-32 h-32 rounded-xl shadow-2xl custom-border">
                <h2 className="text-5xl font-bold text-white">{timeLeft[unit]}</h2>
                <p className="text-gray-300 capitalize">{unit}</p>
            </div>

            {/* Right Black Circle for each card with increased negative margin and z-index */}
            <div className="bg-black w-3 h-3 rounded-full mx-[-2.5] absolute z-10 right-[-0.5rem]"></div>
          </div>
        ))}
      </div>
    </div>
);
}

export default ComingSoonPage;