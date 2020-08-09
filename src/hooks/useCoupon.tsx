import { useRecoilState, useRecoilValue } from 'recoil';
import { couponState, couponSelectedState } from '../stores/coupon';

const useCoupon = () => {
  const coupons = useRecoilValue<CouponType[]>(couponState);
  const [selectedCoupon, setSelectedCoupon] = useRecoilState<CouponType | null>(couponSelectedState);

  const selectCoupon = (coupon: CouponType) => {
    setSelectedCoupon(coupon);
  }

  const deselectCoupon = (coupon: CouponType) => {
    setSelectedCoupon(null);
  }

  return {
    coupons,
    selectedCoupon,
    selectCoupon,
    deselectCoupon,
  }
};

export default useCoupon;
