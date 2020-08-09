interface ProductType {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
}
interface CartItemType extends ProductType {
  quantity?: number;
  selected?: boolean;
}

interface CouponType {
  type: 'rate' | 'amount';
  title: string;
  discountAmount?: number;
  discountRate?: number;
}

type ClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

interface PartitionType<T> {
  pass: T[],
  fail: T[]
}