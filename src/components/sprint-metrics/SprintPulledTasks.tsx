import { BatteryLow } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SprintPulledTasks = () => {
  return (
    <>
      <div className="flex justify-end align-top">
        <Badge
          variant="outline"
          className="text-yellow-600 border-yellow-600 shadow-yellow-600 shadow-sm"
        >
          <div className="flex items-center justify-center p-0 m-0">
            <BatteryLow className="mx-1" />
            <div className="font-semibold">Нормально</div>
          </div>
        </Badge>
      </div>
      <div className="flex justify-start align-buttom">
        <div className="text-sm text-muted-foreground">
          Снято <br />2 задач на 1 sp ~ 8 ч/д
        </div>
      </div>

      <Separator className="my-4" />

      <Progress value={89} className="mb-3" />

      <div className="flex justify-end">
        <div className="">Снято 33%</div>
      </div>
    </>
  );
};

export default SprintPulledTasks;
