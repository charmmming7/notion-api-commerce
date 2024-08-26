export interface ProductProps {
  id: string;
  name: string;
  brand: string;
  quantity?: number;
  price: number;
  discountedPrice?: number;
  imgSrc?: string;
  colors?: string[];
  imgType?: string;
  tags?: tagProps[];
  slug: string;
  content?: string;
  salesInfo?: string;
}

export interface tagProps {
  name: string;
  color: string;
}
