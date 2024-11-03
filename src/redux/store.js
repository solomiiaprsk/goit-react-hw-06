import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { profileReducer } from "./contactsSlice"; // Import contactsReducer from contactsSlice
// import profileReducer from "./path/to/profileSlice"; // Import profileReducer
// import filtersReducer from "./path/to/filtersSlice"; // Import filtersReducer

const persistedContactReducer = persistReducer(
  {
    key: "contactItems",
    storage,
    whitelist: ["profiles"], // Ensure 'items' exists in the contacts state
  },
  profileReducer
);

export const store = configureStore({
  reducer: {
    profiles: profileReducer,
    contacts: persistedContactReducer, // Use the persisted contact reducer here
    // filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
