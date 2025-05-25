import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/api/api";
import store from "@/app/providers/store-provider/config/store.ts";

export const getSprintsTeams = createAsyncThunk<
  any,
  void,
  { rejectValue: string }
>("parameters/getSprintsTeams", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`/sprints_teams`);
    return response.data;
  } catch (e) {
    return rejectWithValue("Не удалось загрузить данные патентообладателей");
  }
});

export const uploadFiles = createAsyncThunk<
  string,
  { formData: FormData },
  { rejectValue: string }
>("parameters/uploadFiles", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post(`/upload`, data.formData);

    if (response.data.status === "done")
      await store.dispatch(getSprintsTeams());

    return response.data.status;
  } catch (e) {
    return rejectWithValue("Не удалось загрузить файлы");
  }
});
