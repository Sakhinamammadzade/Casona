export interface IProduct {
  id: number;
  name: string;
  price: number;
  discountPrice?: number | null;
  image: string;
  title?:string;
  description?:string
}

export interface ICartProduct {
  id: number;
  name: string;
  price: number;
  discountPrice?: number | null;
  image: string;
  cartQuantity: number;
}
