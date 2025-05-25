import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

interface DualRangeSliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  formatLabel?: (value: number) => string;
}

const DualRangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  DualRangeSliderProps
>(
  (
    {
      className,
      value,
      onValueChange,
      min = 1,
      max = 14,
      step = 1,
      formatLabel = (value) => `Day ${value}`,
      ...props
    },
    ref,
  ) => {
    const days = Array.from({ length: max - min + 1 }, (_, i) => i + min);

    return (
      <div className="relative w-full touch-none select-none pt-6">
        <div className="absolute w-full flex justify-between px-2 -mt-6">
          {days.map((day) => (
            <div
              key={day}
              className="flex flex-col items-center"
              style={{ width: "20px" }}
            >
              <div
                className={cn(
                  "h-3 w-0.5 transition-colors",
                  day >= value[0] && day <= value[1]
                    ? "bg-primary"
                    : "bg-gray-200",
                )}
              />
              <span
                className={cn(
                  "text-xs mt-1 transition-colors",
                  day >= value[0] && day <= value[1]
                    ? "text-primary font-medium"
                    : "text-muted-foreground",
                )}
              >
                {day}
              </span>
            </div>
          ))}
        </div>

        <SliderPrimitive.Root
          ref={ref}
          className={cn(
            "relative flex w-full touch-none select-none items-center",
            className,
          )}
          value={value}
          onValueChange={onValueChange}
          min={min}
          max={max}
          step={step}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
            <SliderPrimitive.Range className="absolute h-full bg-indigo-500" />
          </SliderPrimitive.Track>

          {[0, 1].map((index) => (
            <SliderPrimitive.Thumb
              key={index}
              className={cn(
                "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:border-primary hover:bg-accent",
                "data-[state=active]:border-primary data-[state=active]:bg-accent",
              )}
            />
          ))}
        </SliderPrimitive.Root>
      </div>
    );
  },
);

DualRangeSlider.displayName = "DualRangeSlider";

export default DualRangeSlider;
