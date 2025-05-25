import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "chrome", visitors: 5, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 2, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 1, fill: "var(--color-firefox)" },
];
const chartConfig = {
  visitors: {
    label: "Количество",
  },
  chrome: {
    label: "Отклонено",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Отменено",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Дубликат",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const invoices = [
  {
    invoice: "01.02",
    paymentStatus: "10 шт - 80 пл/ч",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "02.02",
    paymentStatus: "9 шт - 70 пл/ч",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "03.02",
    paymentStatus: "8 шт - 60 пл/ч",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "04.02",
    paymentStatus: "7 шт - 50 пл/ч",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "05.02",
    paymentStatus: "6 шт - 40 пл/ч",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "06.02",
    paymentStatus: "3 шт - 20 пл/ч",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "07.02",
    paymentStatus: "1 шт - 10 пл/ч",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

function DayMetrics() {
  return (
    <div className="flex space-x-4">
      <Card className="w-2/3">
        <CardHeader>
          <CardTitle>Метрики здоровья спринта</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>День</TableHead>
                <TableHead>К выполнению</TableHead>
                <TableHead>В работе</TableHead>
                <TableHead>Сделано</TableHead>
                <TableHead>Снято</TableHead>
                <TableHead>Изменено</TableHead>
                <TableHead>Блок</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Осталось</TableCell>
                <TableCell className="text-lime-500">0 шт - 0 пл/ч</TableCell>
                <TableCell className="text-lime-500">0 шт - 0 пл/ч</TableCell>
                <TableCell className="text-amber-300">1 шт - 10 пл/ч</TableCell>
                <TableCell className="text-lime-500">0 шт - 0 пл/ч</TableCell>
                <TableCell className="text-lime-500">0 шт - 0 пл/ч</TableCell>
                <TableCell className="text-red-500">0 шт - 0 пл/ч</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
      <div className="w-1/3 flex flex-col">
        <Card className="flex flex-col mb-3">
          <CardHeader className="items-center pb-0">
            <CardTitle>Снято по причине</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
            >
              <PieChart>
                <ChartTooltip
                  content={<ChartTooltipContent nameKey="visitors" hideLabel />}
                />
                <Pie data={chartData} dataKey="visitors">
                  <LabelList
                    dataKey="browser"
                    className="fill-background"
                    stroke="none"
                    fontSize={12}
                    formatter={(value: keyof typeof chartConfig) =>
                      chartConfig[value]?.label
                    }
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="">
          <CardHeader className="items-center pb-0">
            <CardTitle>Исключено и добавлено</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Дни</TableHead>
                  <TableHead>1</TableHead>
                  <TableHead>2</TableHead>
                  <TableHead>3</TableHead>
                  <TableHead>4</TableHead>
                  <TableHead>5</TableHead>
                  <TableHead>6</TableHead>
                  <TableHead>7</TableHead>
                  <TableHead>8</TableHead>
                  <TableHead>9</TableHead>
                  <TableHead>10</TableHead>
                  <TableHead>11</TableHead>
                  <TableHead>12</TableHead>
                  <TableHead>13</TableHead>
                  <TableHead>14</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">-/+</TableCell>
                  <TableCell>0/0</TableCell>
                  <TableCell>1/0</TableCell>
                  <TableCell>0/0</TableCell>
                  <TableCell>1/0</TableCell>
                  <TableCell>0/0</TableCell>
                  <TableCell>1/0</TableCell>
                  <TableCell>0/0</TableCell>
                  <TableCell>1/0</TableCell>
                  <TableCell>0/0</TableCell>
                  <TableCell>1/0</TableCell>
                  <TableCell>0/0</TableCell>
                  <TableCell>1/0</TableCell>
                  <TableCell>0/0</TableCell>
                  <TableCell>0/0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default DayMetrics