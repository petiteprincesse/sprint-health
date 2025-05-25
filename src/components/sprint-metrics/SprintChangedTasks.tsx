import { Battery } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SprintChangedTasks = () => {
  return (
    <>
      <div className="flex justify-end align-top">
        <Badge
          variant="outline"
          className="text-rose-500 border-rose-500 shadow-rose-500 shadow-sm"
        >
          <div className="flex items-center justify-center p-0 m-0">
            <Battery className="mx-1" />
            <div className="font-semibold">Проблема</div>
          </div>
        </Badge>
      </div>
      <div className="flex justify-start align-buttom">
        <div className="text-sm text-muted-foreground">
          Изменено <br />2 задач на 1 sp ~ 8 ч/д
        </div>
      </div>
      <Separator className="my-4" />

      <Progress value={89} className="mb-3" />

      <div className="flex justify-end">
        <div className="">Изменено 33%</div>
      </div>
    </>
  );
};

export default SprintChangedTasks;
