import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Button from '@components/core/Button';
import FormGroup from '@components/core/FormGroup';
import Input from '@components/core/Input';
import RootStyled from './Cart';

import { getCartItems } from '@redux/reducers/cart.reducer';
import { toCurrency } from '@utils/formatter';
import {
  fetchPaymentMethods,
  getPaymentMethods
} from '@redux/reducers/paymentMethod.reducer';
import { useAppDispatch } from '@hooks/useAppDispatch';

const Cart = () => {
  const cartItems = useSelector(getCartItems());
  const paymentMethods = useSelector(getPaymentMethods());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPaymentMethods());
  }, []);

  return (
    <RootStyled>
      <div className="cart-sidebar">
        <div className="cart-detail">
          <h3 className="title">Chi tiết giỏ hàng</h3>

          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="thumbnail">
                <img src={item.images[0].url} alt="" />
              </div>

              <div className="info">
                <Link href={`/products/${item.id}`}>
                  <a className="name">{item.name}</a>
                </Link>
                <div className="qty">
                  <span className="qty-decrease">-</span>
                  <input
                    type="text"
                    disabled
                    value={item.qty}
                    onChange={() => null}
                  />
                  <span className="qty-increase">+</span>
                </div>
              </div>

              <div className="actions">
                <span className="action">Xóa</span>
                <span className="action">Mua sau</span>
                <span className="price">{toCurrency(item.price)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <FormGroup>
            <label>Tạm tính</label>
            <span className="price">{toCurrency(123)}</span>
          </FormGroup>

          <FormGroup>
            <label>Phí vận chuyển</label>
            <span className="price">{toCurrency(123)}</span>
          </FormGroup>

          <FormGroup>
            <label>Thành tiền</label>
            <span className="price total-price">{toCurrency(123)}</span>
          </FormGroup>
        </div>
      </div>

      <form className="cart-main">
        <div className="checkout-info">
          <h3 className="title">Thông tin giao hàng</h3>

          <FormGroup>
            <label>Họ tên</label>
            <Input />
          </FormGroup>

          <FormGroup>
            <label>Email</label>
            <Input />
          </FormGroup>

          <FormGroup>
            <label>Số điện thoại</label>
            <Input />
          </FormGroup>

          <FormGroup>
            <label>Địa chỉ</label>
            <Input />
          </FormGroup>

          <FormGroup>
            <label>Ghi chú</label>
            <Input />
          </FormGroup>
        </div>

        <div className="payment-methods">
          <h3 className="title">Phương thức thanh toán</h3>

          {paymentMethods.map(item => (
            <FormGroup as="label" className="payment-method" key={item.id}>
              <input type="radio" name="paymentMethodId" />
              <div>
                <h4>{item.name}</h4>
              </div>
            </FormGroup>
          ))}
        </div>

        <Button type="submit" inline={false}>
          Đặt hàng
        </Button>
      </form>
    </RootStyled>
  );
};

export default Cart;
