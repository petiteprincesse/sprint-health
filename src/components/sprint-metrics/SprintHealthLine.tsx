import { Separator } from "@/components/ui/separator";
import { MeterGroup } from "./MeterGroup";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const metrics = [
  {
    label: "К выполнению",
    value: 45,
    max: 100,
    unit: "%",
    color: "bg-blue-500",
  },
  {
    label: "В работе",
    value: 82,
    max: 100,
    unit: "%",
    color: "bg-yellow-500",
  },
  {
    label: "Сделано",
    value: 67,
    max: 100,
    unit: "%",
    color: "bg-amber-500",
  },
  {
    label: "Снято",
    value: 30,
    max: 100,
    unit: "%",
    color: "bg-purple-500",
  },
  {
    label: "Заблокировано",
    value: 30,
    max: 100,
    unit: "%",
    color: "bg-green-500",
  },
];

const SprintHealthLine = () => {
  return (
    <>
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Общее здоровье спринта</CardTitle>
          <CardDescription>
            {/* <div className="">Запланировано: 20 задач на 10 sp ~ 80 ч/д</div> */}
            <Separator className="m-1" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            {/* <div className="flex">
              <div className="">Бэклог изменен на 3%</div>
              <div className="">Заблокировано задач на 0.0 ч/д</div>
            </div>
            <div className=""></div> */}
            <MeterGroup meters={metrics} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SprintHealthLine;
