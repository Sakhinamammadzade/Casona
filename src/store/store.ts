import { ProductCardReducer } from '../components/productCard/productCardSlice';
import { configureStore } from '@reduxjs/toolkit';


import { testPageReducer } from '../pages/TestPage/testPageSlice';
import { headerAsideReducer } from '../components/header/headerAsideSlice';
import { cartCounterReducer } from '../components/header/headerCartSlice';

import { headerAsideReducer } from '../components/header/headerAsideSlice';
import { testPageReducer } from '../pages/TestPage/testPageSlice';
import { userReducer } from '../pages/MyAccount/UserSlice';
import cartSlice from '../components/header/headerCartSlice';


export const store = configureStore({
    reducer: {
        testPage: testPageReducer,
        productCard: ProductCardReducer,
        asideOpener: headerAsideReducer,
        cartCounter: cartCounterReducer,

        productDetail:ProductCardReducer
    },

        user: userReducer, 
        cartCounter: cartSlice,
    }, //add reducers here

});

export type RootState = ReturnType<typeof store.getState>;

