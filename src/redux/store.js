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

// state = {
//  profiles: {
//     profiles: [],
//             showProfilesList: true,
//     }
// }


const persistedContactReducer = persistReducer(
  {
    key: "contactItems",
    storage,
    whitelist: ["items"],
  },
  contactsReducer
);

export const store = configureStore({
    reducer: {
        profiles: profileReducer,
  contacts: persistedContactReducer,
  filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



export const persistor = persistStore(store);