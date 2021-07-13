import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { useAppDispatch } from '@hooks/useAppDispatch';
import Root from './MyOrderTracking';

import Loading from '@components/Loading';

import { getIsLoading } from '@redux/reducers/app';
import { getOrderTracking, fetchTracking } from '@redux/reducers/order';
import { isoDateToNativeDate } from '@utils/formatter';
import { orderStatus } from '@constants/index';
import { PATH_NAME } from '@configs/pathName';

const MyOrderTracking = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const orderId = router.query.id;
  const isLoading = useSelector(getIsLoading());
  const tracking = useSelector(getOrderTracking());

  useEffect(() => {
    dispatch(fetchTracking(orderId as string));
  }, [orderId]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Root>
      <div className="order-heading">
        <div className="order-id">
          {t('OrderId')}: #{orderId}
        </div>
        <Link href={`${PATH_NAME.MY_ORDER}/${orderId}`}>
          <a className="back-to-order-detail">{t('View order detail')}</a>
        </Link>
      </div>
      <div className="tracking">
        {tracking.map(item => (
          <div key={item.id} className="tracking-item">
            <div className="status">{t(orderStatus[item.orderStatus])}</div>
            <div className="description">{item.description}</div>
            <div className="date-time">
              {isoDateToNativeDate(item.dateTime, true, true)}
            </div>
          </div>
        ))}
      </div>
    </Root>
  );
};

export default MyOrderTracking;
