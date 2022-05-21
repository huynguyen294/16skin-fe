import { configureStore } from '@reduxjs/toolkit';
import { UIReducer, UserReducer } from '../reducer';

const store = configureStore({
  reducer: {
    UIStore: UIReducer,
    userStore: UserReducer,
  },
});

export default store;
