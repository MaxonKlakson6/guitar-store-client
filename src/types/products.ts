export interface Guitar {
  id: number;
  vendorCode: number;
  category: string;
  name: string;
  price: number;
  material: string;
  stringQuantity: number;
  color: string;
  image: string;
}

export interface Accessory {
  id: number;
  vendorCode: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export type Product = Guitar | Accessory;

export interface CartItem {
  price: number;
  quantity: number;
  name: string;
  image: string;
  vendorCode: number;
}

export type FavouriteItem = Omit<CartItem, "qunatity">;

export type FavouritesObject = Record<string, FavouriteItem>;
