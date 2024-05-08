export interface ProductProps {
  id: string;
  name: string;
  brand: string;
  quantity?: number;
  price: number;
  imgSrc?: string;
  imgType?: string;
  tags?: tagProps;
  slug: string;
  content?: string;
}

export interface tagProps {
  name: string;
  color: string;
}
