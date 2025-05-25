import UniformityCard from "./UniformityCard";
import SprintDisadvantagesCard from "./SprintDisadvantagesCard";
import SprintHealthLine from "./SprintHealthLine";
import { Calendar } from "lucide-react";
import DayTaskSum from "./DayTaskSum";
import DayMetrics from "./DayMetrics";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import DaySlider from "@/components/DaySlider.tsx";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/store-provider/config/hooks.ts";
import { useState } from "react";
import HealthSpeedometr from "./HealthSpeedometr";


const SprintMetrics = () => {
  const { activeSprint } = useAppSelector((state) => state.parameters);
  const [selectedDay, setSelectedDay] = useState<number[]>([7]);
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <div className="flex flex-col w-full my-3">
      <div className="my-4">
        <div className="text-lg font-semibold mb-2">
          {/* Общие показатели - {activeSprint} */}
          Общие показатели спринта
        </div>
        <div className="flex justify-between align-middle w-48 px-2 py-1 border border-slate-300 rounded-lg shadow-md text-slate-600">
          <Calendar />
          <div className="">05.06.24 - 15.06.24</div>
        </div>
      </div>
      <div className="w-full ml-96">
        <HealthSpeedometr />
      </div>
      <div className="flex justify-around space-x-4">
        <div className="w-1/3">
          <UniformityCard />
        </div>
        <div className="w-2/3 flex flex-col space-y-4">
          <div className="w-full">
            <SprintDisadvantagesCard />
          </div>
          <div className="w-full">
            <SprintHealthLine />
          </div>
        </div>
      </div>
      <Tabs
        defaultValue={activeSprint}
        onValueChange={(value) => setSelectedTab(value)}
      >
        <div className="flex mt-4 mb-4">
          <TabsList>
            <TabsTrigger value={activeSprint}>{activeSprint}</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value={activeSprint}>
          <div className="flex gap-4">
            <Card className="w-full max-w-xl p-5 space-y-6">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold tracking-tight">
                  Выбор дня спринта
                </h2>
                <p className="text-sm text-muted-foreground">
                  Выберите день спринта от 1 до 14 с помощью ползунка ниже
                </p>
              </div>
              <DaySlider value={selectedDay} onValueChange={setSelectedDay} />
              <p className="text-center text-sm text-muted-foreground">
                Выбран:{" "}
                <span className="font-medium text-primary">
                  День {selectedDay[0]}
                </span>
              </p>
            </Card>
            <Card className="w-full max-w-xl">
              <CardHeader>
                <CardTitle>Метрики</CardTitle>
                <CardDescription>
                  На конец дня (или текущий момент)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col">
                  <div className="">К выполнению:</div>
                  <div className="">В работе:</div>
                  <div className="">Сделано:</div>
                  <div className="">Снято:</div>
                  <div className="">Бэклог изменен на:</div>
                  <div className="">Заблокировано:</div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      <DayTaskSum />
      <DayMetrics />
    </div>
  );
};

export default SprintMetrics;
