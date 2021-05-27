import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducers from './reducers';
import {  
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })  
];

const store = configureStore({
  reducer: {
    contacts:  reducers,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// eslint-disable-next-line
export default store;