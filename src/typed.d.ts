interface ProductType {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
}
interface CartItemType extends ProductType {
  selected?: boolean;
}

interface CouponType {
  type: 'rate' | 'amount';
  title: string;
  discountAmount?: number;
  discountRate?: number;
}