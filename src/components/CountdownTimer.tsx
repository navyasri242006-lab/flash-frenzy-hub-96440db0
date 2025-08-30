import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  size?: "sm" | "md" | "lg";
}

const CountdownTimer = ({ targetDate, size = "md" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl md:text-3xl",
  };

  const containerClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-4 md:gap-6",
  };

  const unitClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20 md:w-24 md:h-24",
  };

  return (
    <div className={`flex items-center justify-center ${containerClasses[size]}`}>
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Mins" },
        { value: timeLeft.seconds, label: "Secs" },
      ].map((item, index) => (
        <div key={item.label} className="flex flex-col items-center">
          <div
            className={`${unitClasses[size]} bg-accent text-accent-foreground rounded-lg flex items-center justify-center font-poppins font-bold ${sizeClasses[size]} animate-flash-pulse shadow-card`}
          >
            {String(item.value).padStart(2, "0")}
          </div>
          <span className="text-xs mt-1 font-inter text-muted-foreground">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;