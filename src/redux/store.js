import { configureStore } from "@reduxjs/toolkit";

// redux-persist
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

import { carsReducer } from "./contacts/contactsSlice";
import { filtersReducer } from "./filters/filtersSlice";
import { findQueryReducer } from "./filters/findQuerySlice";
import { themeReducer } from "./theme/themeSlice";


const contactsConfig = {
  key: 'cars',
  storage,
  whitelist: ['items'],
}

const filtersConfig = {
  key: 'filters',
  storage,
  whitelist: ['status'],
}

const themeConfig = {
  key: 'theme',
  storage,
  whitelist: ['status'],
}

// redux-persist + store
export const store = configureStore({
  reducer: {
    cars: persistReducer(contactsConfig, contactsReducer),
    filters: persistReducer(filtersConfig, filtersReducer),
    findQuery: findQueryReducer,
    theme: persistReducer(themeConfig, themeReducer),
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);




