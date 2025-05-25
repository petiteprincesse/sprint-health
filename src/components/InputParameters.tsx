import { Button } from "@/components/ui/button.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { FileUploadDialog } from "@/components/FileUploadDialog.tsx";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/store-provider/config/hooks.ts";
import { useState } from "react";
import {
  setActiveSprint,
  setActiveTeam,
  setIsShowContent,
} from "@/redux/parameters/slice/parametersSlice.ts";
import { Spinner } from "@/components/ui/spinner.tsx";

export const InputParameters = () => {
  const dispatch = useAppDispatch();
  const { filesStatus, sprintsTeamsData, isShowContent } = useAppSelector(
    (state) => state.parameters,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSprint, setSelectedSprint] = useState<string>("");
  const [selectedTeam, setSelectedTeam] = useState<string>("");

  const onSprintChange = (value: string) => {
    setSelectedSprint(value);
  };

  const onTeamChange = (value: string) => {
    setSelectedTeam(value);
  };

  const submitSelections = () => {
    console.log({
      selectedSprint,
      selectedTeam,
    });
    dispatch(setActiveSprint(selectedSprint));
    dispatch(setActiveTeam(selectedTeam));
    dispatch(setIsShowContent(true));
  };

  return (
    <>
      <div className="flex flex-col gap-4 mb-4">
        <p className="font-semibold text-[1rem] text-gray-500 mt-4">
          Шаг 1. Выберите файлы для загрузки данных о спринтах
        </p>
        <Button
          className="w-60 text-white"
          onClick={() => setIsDialogOpen(true)}
        >
          Выбрать файлы для загрузки
        </Button>
      </div>

      {(filesStatus.isLoading || sprintsTeamsData.isLoading) && <Spinner />}

      {filesStatus.status === "done" && !isShowContent && (
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-[1rem] text-gray-500 mt-4">
            Шаг 2. Выберите из списка спринты и команду
          </p>
          <Select onValueChange={onSprintChange}>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Выберите спринт" />
            </SelectTrigger>
            <SelectContent>
              {sprintsTeamsData.data?.sprints.map((item: any) => (
                <SelectItem value={item}>{item}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={onTeamChange}>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Выберите команду" />
            </SelectTrigger>
            <SelectContent>
              {sprintsTeamsData.data?.teams.map((item: any) => (
                <SelectItem value={item}>{item}</SelectItem>
              ))}
              <SelectItem value="Все команды">Все команды</SelectItem>
            </SelectContent>
          </Select>
          <Button
            className="w-40 text-white"
            onClick={submitSelections}
            disabled={!selectedSprint.length || !selectedTeam}
          >
            Отправить
          </Button>
        </div>
      )}

      <FileUploadDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
};
