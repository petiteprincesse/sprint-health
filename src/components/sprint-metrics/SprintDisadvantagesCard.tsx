import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SprintUnfulfilledTasks from "./SprintUnfulfilledTasks";
import SprintPulledTasks from "./SprintPulledTasks";
import SprintChangedTasks from "./SprintChangedTasks";

const SprintDisadvantagesCard = () => {
  return (
    <div>
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>По результатам спринта</CardTitle>
          <CardDescription>
            <div className="">Запланировано: 20 задач на 10 sp ~ 80 ч/д</div>
            <Separator className="m-1" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between space-x-5">
            <div className="w-1/3">
              <SprintUnfulfilledTasks />
            </div>
            <div className="w-1/3">
              <SprintPulledTasks />
            </div>
            <div className="w-1/3">
              <SprintChangedTasks />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SprintDisadvantagesCard;
