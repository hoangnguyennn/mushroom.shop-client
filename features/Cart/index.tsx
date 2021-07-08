import { toast } from 'react-toastify';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import classNames from 'classnames';
import Link from 'next/link';

import CartStyled from './Cart';

import { toCurrency } from '@utils/formatter';
import Button from '@components/core/Button';
import Form from '@components/core/Form';
import FormGroup from '@components/core/FormGroup';
import Input from '@components/core/Input';
import Invalid from '@components/core/Invalid';

import { getPaymentMethods } from '@redux/reducers/paymentMethod';
import {
  getCartItems,
  getCartSubtotal,
  getDeliveryFee,
  order,
  removeFromCart,
  updateQty
} from '@redux/reducers/cart';
import { getUser } from '@redux/reducers/auth';
import { ICartForm, IOrder } from '@interfaces/index';
import { PATH_NAME } from '@configs/pathName';
import { imageUrlToSpecificSize } from '@utils/converter';
import breakpoint from '@configs/breakpoint';

const Cart = () => {
  const { t } = useTranslation();

  const cartItems = useSelector(getCartItems());
  const cartSubtotal = useSelector(getCartSubtotal());
  const paymentMethods = useSelector(getPaymentMethods());
  const userInfo = useSelector(getUser());

  const dispatch = useDispatch();
  const router = useRouter();

  const [isValid, setIsValid] = useState(false);
  const [imageSize, setImageSize] = useState(breakpoint.desktop.cartItem);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);

  const imageUrl = useCallback(
    (image: string) => imageUrlToSpecificSize(image, imageSize, imageSize),
    [imageSize]
  );

  const [initialValues, setInitialValues] = useState<ICartForm>({
    deliveryFullName: '',
    deliveryAddress: '',
    deliveryPhone: '',
    deliveryEmail: '',
    deliveryNote: '',
    paymentMethodId: ''
  });

  const validationSchema = Yup.object({
    deliveryFullName: Yup.string().required(t('This field is required')),
    deliveryAddress: Yup.string().required(t('This field is required')),
    deliveryPhone: Yup.string().required(t('This field is required')),
    deliveryEmail: Yup.string().email().required(t('This field is required')),
    note: Yup.string()
  });

  const handleFormSubmit = async (values: ICartForm, { setSubmitting }) => {
    const orderRequest: IOrder = {
      ...values,
      userId: userInfo.id,
      items: cartItems.map(cartItem => ({
        productId: cartItem.id,
        qty: cartItem.qty
      }))
    };

    try {
      await dispatch(order(orderRequest));
      router.replace(`${PATH_NAME.ORDERS}?status=success`);
      toast.success('success');
    } catch (err) {
      toast.error(err.message || 'error');
    }

    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: handleFormSubmit
  });

  useEffect(() => {
    setIsValid(cartItems.length !== 0);
  }, [cartItems.length]);

  useEffect(() => {
    setInitialValues(prevState => ({
      ...prevState,
      deliveryFullName: userInfo.fullName || '',
      deliveryAddress: userInfo.address || '',
      deliveryPhone: userInfo.phone || '',
      deliveryEmail: userInfo.email || ''
    }));
  }, [userInfo]);

  useEffect(() => {
    if (paymentMethods.length) {
      setInitialValues(prevState => ({
        ...prevState,
        paymentMethodId: paymentMethods[0].id
      }));
    }
  }, [paymentMethods]);

  useEffect(() => {
    if (imageWrapRef.current?.offsetWidth) {
      setImageSize(imageWrapRef.current?.offsetWidth);
    }
  }, [imageWrapRef.current]);

  return (
    <CartStyled>
      <div className="cart-sidebar">
        <div className="cart-detail">
          <h3 className="title">{t('Cart detail')}</h3>

          {cartItems.length ? (
            cartItems.map(item => (
              <FormGroup className="cart-item" key={item.id}>
                <div className="thumbnail" ref={imageWrapRef}>
                  <img
                    src={imageUrl(item.images[0] || '')}
                    alt={item.name}
                    loading="lazy"
                    style={
                      imageUrl(item.images[0] || '')
                        ? {}
                        : { paddingTop: '100%' }
                    }
                  />
                </div>
                <div className="info">
                  <Link href={`${PATH_NAME.PRODUCTS}/${item.id}`}>
                    <a className="name">{item.name}</a>
                  </Link>
                  <div className="qty">
                    <span
                      className={classNames({
                        'qty-decreace': true,
                        disabled: item.qty <= 1
                      })}
                      onClick={() => {
                        if (item.qty > 0) {
                          dispatch(
                            updateQty({ id: item.id, qty: item.qty - 1 })
                          );
                        }
                      }}
                    >
                      -
                    </span>
                    <input
                      value={item.qty}
                      onChange={() => undefined}
                      disabled
                    />
                    <span
                      className={classNames({
                        'qty-increase': true,
                        disabled: item.qty >= 99
                      })}
                      onClick={() => {
                        if (item.qty < 99) {
                          dispatch(
                            updateQty({ id: item.id, qty: item.qty + 1 })
                          );
                        }
                      }}
                    >
                      +
                    </span>
                  </div>
                </div>
                <div className="actions">
                  <span
                    className="action"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    {t('Delete')}
                  </span>
                  <span className="action">{t('Buy later')}</span>
                  <span className="price">{toCurrency(item.price)}</span>
                </div>
              </FormGroup>
            ))
          ) : (
            <p>Empty</p>
          )}
        </div>
        <div className="cart-summary">
          <FormGroup>
            <label>{t('Subtotal')}</label>
            <span className="price">{toCurrency(cartSubtotal)}</span>
          </FormGroup>

          <FormGroup>
            <label>{t('Delivery fee')}</label>
            <span className="price">
              {getDeliveryFee ? toCurrency(getDeliveryFee) : t('Free')}
            </span>
          </FormGroup>

          <FormGroup>
            <label>{t('Total')}</label>
            <span className="price total-price">
              {toCurrency(cartSubtotal + getDeliveryFee)}
            </span>
          </FormGroup>
        </div>
      </div>

      <Form className="cart-main" onSubmit={formik.handleSubmit}>
        <div className="checkout-information">
          <h3 className="title">{t('Order information')}</h3>

          <FormGroup>
            <Input
              placeholder={t('Fullname')}
              name="deliveryFullName"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.deliveryFullName}
            />
            {formik.errors.deliveryFullName ? (
              <Invalid>{formik.errors.deliveryFullName}</Invalid>
            ) : null}
          </FormGroup>

          <FormGroup>
            <Input
              placeholder={t('Phone')}
              name="deliveryPhone"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.deliveryPhone}
            />
            {formik.errors.deliveryPhone ? (
              <Invalid>{formik.errors.deliveryPhone}</Invalid>
            ) : null}
          </FormGroup>

          <FormGroup>
            <Input
              placeholder={t('Email address')}
              name="deliveryEmail"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.deliveryEmail}
            />
            {formik.errors.deliveryEmail ? (
              <Invalid>{formik.errors.deliveryEmail}</Invalid>
            ) : null}
          </FormGroup>

          <FormGroup>
            <Input
              placeholder={t('Address')}
              name="deliveryAddress"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.deliveryAddress}
            />
            {formik.errors.deliveryAddress ? (
              <Invalid>{formik.errors.deliveryAddress}</Invalid>
            ) : null}
          </FormGroup>

          <FormGroup>
            <Input
              rightPlaceholder={t('Optional')}
              placeholder={t('Note')}
              name="deliveryNote"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.deliveryNote}
            />
          </FormGroup>
        </div>

        <div className="payment-methods">
          <h3 className="title">{t('Payment method')}</h3>

          {paymentMethods.map(method => (
            <FormGroup
              as="label"
              className={classNames({
                'payment-method': true,
                active: formik.values.paymentMethodId === method.id
              })}
              key={method.id}
            >
              <input
                type="radio"
                value={method.id}
                name="paymentMethodId"
                checked={formik.values.paymentMethodId === method.id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="icon czi-check-circle"></div>
              <div>
                <h4>{t(method.name)}</h4>
              </div>
            </FormGroup>
          ))}
        </div>

        <FormGroup>
          <Button shadow type="submit" disabled={!isValid}>
            {t('Checkout')}
          </Button>
        </FormGroup>
      </Form>
    </CartStyled>
  );
};

export default Cart;
