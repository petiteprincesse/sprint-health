import { cn } from "@/lib/utils";

export interface MeterSegmentProps {
  value: number;
  max: number;
  min?: number;
  color?: string;
  label?: string;
  unit?: string;
  width: string;
}

function MeterSegment({
  value,
  max,
  min = 0,
  color = "bg-primary",
  label,
  unit,
  width,
}: MeterSegmentProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      className={cn("h-full transition-all", color)}
      style={{ width }}
      title={`${label}: ${value}${unit}`}
    />
  );
}

export interface MeterGroupProps {
  meters: Array<{
    value: number;
    max: number;
    min?: number;
    color?: string;
    label?: string;
    unit?: string;
  }>;
  className?: string;
}

export function MeterGroup({ meters, className }: MeterGroupProps) {
  const total = meters.reduce((acc, meter) => acc + meter.value, 0);

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-secondary">
        {meters.map((meter, index) => (
          <MeterSegment
            key={index}
            {...meter}
            width={`${(meter.value / total) * 100}%`}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {meters.map((meter, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={cn("h-3 w-3 rounded-full", meter.color)} />
            <div className="flex flex-col">
              <span className="text-sm font-medium">{meter.label}</span>
              <span className="text-sm text-muted-foreground">
                {meter.value}
                {meter.unit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
