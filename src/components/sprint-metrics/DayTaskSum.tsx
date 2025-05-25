import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  Line,
  LineChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "01", desktop: 18 },
  { month: "02", desktop: 20 },
  { month: "03", desktop: 23 },
  { month: "04.02", desktop: 33 },
  { month: "05.02", desktop: 20 },
  { month: "06.02", desktop: 21 },
];

const chartConfig = {
  desktop: {
    label: `Закрыто`,
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Взято",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const chart2Data = [
  { month: "01.02", desktop: 18, mobile: 20 },
  { month: "02.02", desktop: 30, mobile: 20 },
  { month: "03.02", desktop: 23, mobile: 12 },
  { month: "04.02", desktop: 33, mobile: 19 },
  { month: "05.02", desktop: 20, mobile: 13 },
  { month: "06.02", desktop: 21, mobile: 14 },
];
const chart2Config = {
  desktop: {
    label: "План",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Факт",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const DayTaskSum = () => {
  return (
    <div className="flex justify-around space-x-4 my-4 ">
      <div className="w-1/3">
        <Card>
          <CardHeader>
            <CardTitle>Закрыто задач - [98%]</CardTitle>
            <CardDescription>Осталось - [2%]</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart
                accessibilityLayer
                data={chartData}
                margin={{
                  top: 20,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="w-1/3">
        <Card>
          <CardHeader>
            <CardTitle>Закрытые задачи - по плану + с опозданием</CardTitle>
            {/* <CardDescription>January - June 2024</CardDescription> */}
          </CardHeader>
          <CardContent>
            <ChartContainer config={chart2Config}>
              <BarChart accessibilityLayer data={chart2Data}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar
                  dataKey="desktop"
                  stackId="a"
                  fill="var(--color-desktop)"
                  radius={[0, 0, 4, 4]}
                />
                <Bar
                  dataKey="mobile"
                  stackId="a"
                  fill="var(--color-mobile)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="w-1/3">
        <Card>
          <CardHeader>
            <CardTitle>Выгорание спринта</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chart2Config}>
              <LineChart
                accessibilityLayer
                data={chart2Data}
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
                  content={<ChartTooltipContent />}
                />
                <Line
                  dataKey="desktop"
                  type="monotone"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={true}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Line>
                <Line
                  dataKey="mobile"
                  type="monotone"
                  stroke="var(--color-mobile)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DayTaskSum;
