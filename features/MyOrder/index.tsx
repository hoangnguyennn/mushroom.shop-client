import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { useAppDispatch } from '@hooks/useAppDispatch';
import Root from './MyOrder';
import Loading from '@components/Loading';

import { getIsLoading } from '@redux/reducers/app';
import { fetchOrders, getOrders } from '@redux/reducers/order';
import { isoDateToNativeDate, toCurrency } from '@utils/formatter';
import { orderStatus } from '@constants/index';
import { PATH_NAME } from '@configs/pathName';

const MyOrder = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const orders = useSelector(getOrders());
  const isLoading = useSelector(getIsLoading());

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Root>
      <table className="order-list">
        <thead>
          <tr>
            <th>{t('Order Id')}</th>
            <th>{t('Order Date')}</th>
            <th>{t('Products')}</th>
            <th>{t('Total')}</th>
            <th>{t('Order Status')}</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>
                <Link href={`${PATH_NAME.MY_ORDER}/${order.id}`}>
                  <a className="order-id">{order.id}</a>
                </Link>
              </td>
              <td>{isoDateToNativeDate(order.orderDate)}</td>
              <td>{order.items.map(item => item.product.name).join(', ')}</td>
              <td>
                {toCurrency(
                  order.items.reduce(
                    (total, item) => total + item.price * item.qty,
                    0
                  )
                )}
              </td>
              <td>{t(orderStatus[order.orderStatus])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Root>
  );
};

export default MyOrder;
