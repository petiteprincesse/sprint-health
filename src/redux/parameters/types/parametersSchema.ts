export type ParametersSchema = {
  filesStatus: {
    status: string;
    isLoading: boolean;
    error: string | undefined | null;
  };
  sprintsTeamsData: {
    data: any;
    isLoading: boolean;
    error: string | undefined | null;
  };
  activeSprint: string;
  activeTeam: string;
  isShowContent: boolean;
};
