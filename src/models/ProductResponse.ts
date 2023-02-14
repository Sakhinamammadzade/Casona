export interface ProductResponse {
    id: number;
    name: string;
    price: number;
    discountPrice?: number | null;
    image: string;
    title?:string;
    description?:string
}
