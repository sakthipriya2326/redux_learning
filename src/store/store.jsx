import {configureStore} from '@reduxjs/toolkit';
import registrationReducer from "./../slice/slice";

export const store=configureStore({
    reducer:{
        registration:registrationReducer
    }
});