export interface Guitar {
  id: number;
  vendorCode: number;
  category: string;
  name: string;
  price: number;
  material: string;
  stringQuantiry: number;
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
