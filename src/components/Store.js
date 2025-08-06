import { configureStore } from "@reduxjs/toolkit";

import FormReducer from '../components/formslice';

export const Store = configureStore({

    reducer:{
    forms:FormReducer

}

});