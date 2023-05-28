import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import authReducer from './features/auth/authSlice';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import {persistReducer, persistStore} from 'redux-persist';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });
const persistConfig = {
  key: 'primary',
  keyPrefix: '',
  storage: FilesystemStorage,
  whiteList: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {auth: persistedReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = useSelector;

export const persistor = persistStore(store);

export default store;
