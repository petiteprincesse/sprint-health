import {
  AlarmClock,
  AlarmClockCheck,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { month: "Пн", desktop: 186, mobile: 80 },
  { month: "Вт", desktop: 305, mobile: 200 },
  { month: "Ср", desktop: 237, mobile: 120 },
  { month: "Чтв", desktop: 73, mobile: 190 },
  { month: "Птн", desktop: 209, mobile: 130 },
];

const chartConfig = {
  desktop: {
    label: `Взято`,
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Выполнено",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const UniformityCard = () => {
  return (
    <div>
      <Card className="shadow-md h-[470px]">
        <CardHeader>
          <CardTitle>Равномерность выполнения</CardTitle>
          <Separator className="my-8" />
          <CardDescription>
            <div className="flex justify-around">
              <div className="w-1/2">
                <div className="flex items-center mb-1">
                  <AlarmClock className="my-1" />
                  <div className="font-semibold">Взято в работу</div>
                </div>

                <div>
                  <span className="text-red-600">↓ min</span> - Вт, 03.02 -{" "}
                  <strong>[3]</strong>
                </div>
                <div>
                  <span className="text-lime-600">↑ max</span> - Вт, 03.02 -{" "}
                  <strong>[3]</strong>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-center mb-1">
                  <AlarmClockCheck className="my-1" />
                  <div className="font-semibold">Закрыто</div>
                </div>
                <div>
                  <span className="text-red-600">↓ min</span> - Вт, 03.02 -{" "}
                  <strong>[3]</strong>
                </div>
                <div>
                  <span className="text-lime-600">↑ max</span> - Вт, 03.02 -{" "}
                  <strong>[3]</strong>
                </div>
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />

              <Area
                dataKey="desktop"
                type="natural"
                fill="var(--color-desktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
                stackId="a"
              />
              <Area
                dataKey="mobile"
                type="natural"
                fill="var(--color-mobile)"
                fillOpacity={0.4}
                stroke="var(--color-mobile)"
                stackId="a"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none text-blue-600">
                Убывание взятых в работу задач
                <TrendingDown className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 font-medium leading-none text-sky-500">
                Возрастание закрытых задач
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UniformityCard;
