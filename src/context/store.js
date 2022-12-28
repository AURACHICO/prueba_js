import { configureStore, combineReducers } from '@reduxjs/toolkit';
import sesionUser from './sesionUser';
import loader from './loader';
import language from './language';

const rootReducer = combineReducers({
   sesionUser,
   loader,
   language
});

export const store = configureStore({
   reducer:rootReducer,
   devTools: process.env.NODE_ENV !== 'production',
})