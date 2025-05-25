import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParametersSchema } from "@/redux/parameters/types/parametersSchema.ts";
import {
  getSprintsTeams,
  uploadFiles,
} from "@/redux/parameters/services/parametersServices.ts";

const initialState: ParametersSchema = {
  filesStatus: {
    status: "",
    isLoading: false,
    error: null,
  },
  sprintsTeamsData: {
    data: null,
    isLoading: false,
    error: null,
  },
  activeSprint: "",
  activeTeam: "",
  isShowContent: true,
};

const parametersSlice = createSlice({
  name: "parameters",
  initialState,
  reducers: {
    setActiveSprint(state, action: PayloadAction<string>) {
      state.activeSprint = action.payload;
    },
    setActiveTeam(state, action: PayloadAction<string>) {
      state.activeTeam = action.payload;
    },
    setIsShowContent(state, action: PayloadAction<boolean>) {
      state.isShowContent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadFiles.pending, (state) => {
        state.filesStatus.isLoading = true;
      })
      .addCase(uploadFiles.fulfilled, (state, action) => {
        state.filesStatus.status = action.payload;
        state.filesStatus.isLoading = false;
        state.filesStatus.error = "";
      })
      .addCase(uploadFiles.rejected, (state, action) => {
        state.filesStatus.isLoading = false;
        state.filesStatus.error = action.payload;
      })
      .addCase(getSprintsTeams.pending, (state) => {
        state.sprintsTeamsData.isLoading = true;
      })
      .addCase(getSprintsTeams.fulfilled, (state, action) => {
        state.sprintsTeamsData.data = action.payload;
        state.sprintsTeamsData.isLoading = false;
        state.sprintsTeamsData.error = "";
      })
      .addCase(getSprintsTeams.rejected, (state, action) => {
        state.sprintsTeamsData.isLoading = false;
        state.sprintsTeamsData.error = action.payload;
      });
  },
});

export const { setActiveSprint, setActiveTeam, setIsShowContent } =
  parametersSlice.actions;
export const { reducer: parametersReducer } = parametersSlice;
