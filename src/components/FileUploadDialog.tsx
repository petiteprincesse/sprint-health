import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FileUploadZone } from "@/components/FileUploadZone.tsx";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/store-provider/config/hooks.ts";
import { uploadFiles } from "@/redux/parameters/services/parametersServices.ts";

interface FileUploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FileUploadDialog = ({
  open,
  onOpenChange,
}: FileUploadDialogProps) => {
  const dispatch = useAppDispatch();
  const { filesStatus } = useAppSelector((state) => state.parameters);
  const [tasksFiles, setTasksFiles] = useState<File[]>([]);
  const [sprintsFiles, setSprintsFiles] = useState<File[]>([]);
  const [historyFiles, setHistoryFiles] = useState<File[]>([]);
  const [isUploadReady, setIsUploadReady] = useState<boolean>(false);

  useEffect(() => {
    setIsUploadReady(
      tasksFiles.length > 0 &&
        sprintsFiles.length > 0 &&
        historyFiles.length > 0,
    );
  }, [tasksFiles, sprintsFiles, historyFiles]);

  const handleUpload = async () => {
    // Create FormData and append files
    const formData = new FormData();
    if (tasksFiles.length > 0) {
      formData.append("tasks", tasksFiles[0]);
    }
    if (sprintsFiles.length > 0) {
      formData.append("sprints", sprintsFiles[0]);
    }
    if (historyFiles.length > 0) {
      formData.append("history", historyFiles[0]);
    }

    dispatch(uploadFiles({ formData }));

    setTasksFiles([]);
    setSprintsFiles([]);
    setHistoryFiles([]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-[800px]">
        <DialogHeader>
          <DialogTitle>Загрузка файлов</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-1 gap-2 mb-2">
          <FileUploadZone
            title="Задачи"
            onFilesChange={setTasksFiles}
            accept={{
              "text/csv": [".csv"],
            }}
            maxFiles={1}
          />

          <FileUploadZone
            title="Спринты"
            onFilesChange={setSprintsFiles}
            accept={{
              "text/csv": [".csv"],
            }}
            maxFiles={1}
          />

          <FileUploadZone
            title="История"
            onFilesChange={setHistoryFiles}
            accept={{
              "text/csv": [".csv"],
            }}
            maxFiles={1}
          />
        </div>
        <DialogFooter className="gap-2 px-4">
          {!isUploadReady && !filesStatus.error && (
            <p className="text-sm text-gray-500 text-center mt-2">
              Перед тем как продолжить, загрузите все 3 файла
            </p>
          )}
          {filesStatus.error && (
            <p className="text-sm text-red-500 text-center mt-2">
              {filesStatus.error}
            </p>
          )}
          <Button
            onClick={handleUpload}
            className="text-white"
            loading={filesStatus.isLoading}
            disabled={!isUploadReady || filesStatus.isLoading}
          >
            Отправить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
