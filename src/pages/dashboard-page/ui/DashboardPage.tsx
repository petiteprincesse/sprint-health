import { Button } from "@/components/ui/button.tsx";
import SprintMetrics from "@/components/sprint-metrics/SprintMetrics";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/store-provider/config/hooks.ts";
import { InputParameters } from "@/components/InputParameters.tsx";
import {
  setActiveSprint,
  setActiveTeam,
  setIsShowContent,
} from "@/redux/parameters/slice/parametersSlice.ts";

const DashboardPage = () => {
  const dispatch = useAppDispatch();
  const { isShowContent } = useAppSelector((state) => state.parameters);

  const changeParams = () => {
    dispatch(setIsShowContent(true));
    dispatch(setActiveSprint(""));
    dispatch(setActiveTeam(""));
  };

  return (
    <div>
      <h1 className="font-semibold text-[1.5rem] pb-4">
        Дашборд здоровья спринта
      </h1>

      {isShowContent && (
        <Button className="w-60 text-white" onClick={changeParams}>
          Изменить параметры
        </Button>
      )}

      {!isShowContent && <InputParameters />}

      {isShowContent && <SprintMetrics />}
    </div>
  );
};

export default DashboardPage;
