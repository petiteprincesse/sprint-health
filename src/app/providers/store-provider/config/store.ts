import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { parametersReducer } from "@/redux/parameters";

export const rootReducer = combineReducers({
  parameters: parametersReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
