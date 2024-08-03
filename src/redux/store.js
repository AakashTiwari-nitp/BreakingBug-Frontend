import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    //ERROR 
    // HERE EQUAL TO(=) CHANGE TO SEMICLON(:)
    reducer:{
        user: userReducer,
    }
});

export default store;