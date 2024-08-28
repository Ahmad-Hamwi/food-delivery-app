import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/redux/HomeReducer'
import outletReducer from "../features/outlet/details/redux/OutletReducer";
import cartReducer from "../features/cart/redux/CartReducer";

export const store = configureStore({
    reducer: {
        home: homeReducer,
        outlet: outletReducer,
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;