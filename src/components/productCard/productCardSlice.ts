import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductResponse } from '../../models/ProductResponse';

interface ProductCardState {
    products: ProductResponse[];
    choosenProductId:number
}

const initialState: ProductCardState = {
    products: [],
    choosenProductId:0
};

interface LoadProductsPayload {
    products: ProductResponse[];
   
}


export const ProductCardSlice = createSlice({
    name: 'productCard',
    initialState: initialState,
    reducers: {
        loadProducts: (state, action: PayloadAction<LoadProductsPayload>) => {
            state.products = action.payload.products;
        },
        getproductsById:(state,action:PayloadAction<number>)=>{
            state.choosenProductId=action.payload
        }
    },
});

export const { loadProducts } = ProductCardSlice.actions;
export const {getproductsById}=ProductCardSlice.actions;

export const ProductCardReducer = ProductCardSlice.reducer;
