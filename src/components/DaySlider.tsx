import React from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface DaySliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  className?: string;
}

const DaySlider: React.FC<DaySliderProps> = ({
  value,
  onValueChange,
  className,
}) => {
  const days = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <div className={cn("w-full max-w-xl space-y-6", className)}>
      <div className="relative pt-6">
        <div className="absolute w-full flex justify-between px-2 -mt-6">
          {days.map((day) => (
            <div
              key={day}
              className="flex flex-col items-center"
              style={{ width: "20px" }}
            >
              <div
                className={cn(
                  "h-3 w-0.5 bg-gray-200",
                  value[0] === day && "bg-primary",
                )}
              />
              <span
                className={cn(
                  "text-xs mt-1 text-gray-500",
                  value[0] === day && "text-primary font-medium",
                )}
              >
                {day}
              </span>
            </div>
          ))}
        </div>
        <Slider
          defaultValue={[1, 7]}
          max={14}
          min={1}
          step={1}
          value={value}
          onValueChange={onValueChange}
          className="pt-4"
        />
      </div>
    </div>
  );
};

export default DaySlider;
