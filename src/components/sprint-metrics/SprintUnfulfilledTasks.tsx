import {
  BatteryFull,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SprintUnfulfilledTasks = () => {
  return (
    <>
      <div className="flex justify-end align-top">
        <Badge
          variant="outline"
          className="text-lime-600 border-lime-600 shadow-lime-600 shadow-sm"
        >
          <div className="flex items-center justify-center p-0 m-0">
            <BatteryFull className="mx-1" />
            <div className="font-semibold">Успешно</div>
          </div>
        </Badge>
      </div>
        <div className="flex justify-start align-bottom">
          <div className="text-sm text-muted-foreground">
            Нереализовано <br />2 задач на 1 sp ~ 8 ч/д
          </div>
        </div>

      <Separator className="my-4" />

      <Progress value={89} className="mb-3" />

      <div className="flex justify-end">
        <div className="">Осталось 33%</div>
      </div>
    </>
  );
};

export default SprintUnfulfilledTasks;
