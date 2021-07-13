import {
  FC,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@hooks/useAppDispatch';
import Root from './ProductSummary';

import Button from '@components/core/Button';
import Input from '@components/core/Input';

import { addToCart } from '@redux/reducers/cart';
import { getIsDesktop } from '@redux/reducers/app';
import { imageUrlToSpecificSize } from '@utils/converter';
import { IProduct } from '@interfaces/index';
import { ProductStatus } from '@interfaces/enums';
import { toCurrency } from '@utils/formatter';
import breakpoint from '@configs/breakpoint';

type ProductSummaryProps = {
  product: IProduct;
};

const ProductSummary: FC<ProductSummaryProps> = ({ product }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const isDesktop = useSelector(getIsDesktop());

  const [qty, setQty] = useState('1');

  const imageZoomRef = useRef<HTMLImageElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const [imageSize, setImageSize] = useState(
    isDesktop ? breakpoint.desktop.productSummary : 0
  );

  const imageUrl = useCallback(
    (image: string) => imageUrlToSpecificSize(image, imageSize, imageSize),
    [imageSize]
  );

  const handleAddToCart = () => {
    if (Number(qty) > 0) {
      dispatch(addToCart({ ...product, qty: Number(qty) }));
      toast.info('add to cart');
    }
  };

  const handleInputKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'e') {
      event.preventDefault();
    }
  };

  useEffect(() => {
    const div = imageWrapRef.current;
    const img = imageZoomRef.current;

    if (isDesktop && div && img) {
      const handleMouseMove = (event: MouseEvent) => {
        const divHeight = div.offsetHeight;
        const divWidth = div.offsetWidth;
        const imgHeight = img.offsetHeight;
        const imgWidth = img.offsetWidth;

        const top = event.clientY - div.offsetTop;
        const left = event.clientX - div.offsetLeft;

        img.style.top = `-${(top / divHeight) * (imgHeight - divHeight)}px`;
        img.style.left = `-${(left / divWidth) * (imgWidth - divWidth)}px`;
      };

      div.addEventListener('mousemove', handleMouseMove);

      return () => {
        div.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isDesktop, imageWrapRef, imageZoomRef]);

  useEffect(() => {
    if (imageWrapRef.current?.offsetWidth) {
      setImageSize(imageWrapRef.current?.offsetWidth);
    }
  }, [imageWrapRef]);

  return (
    <Root>
      <div className="summary">
        <div className="thumbnail" ref={imageWrapRef}>
          <img
            src={imageUrl(product.images[0] || '')}
            alt={product.name}
            loading="lazy"
            style={{
              width: `${imageSize}px`,
              height: `${imageSize}px`,
              ...(imageUrl(product.images[0] || '')
                ? {}
                : { paddingTop: '100%' })
            }}
          />
          {isDesktop && (
            <img
              src={product.images[0] || ''}
              alt={product.name}
              loading="lazy"
              ref={imageZoomRef}
            />
          )}
        </div>
        <div className="info">
          {product.status === ProductStatus.SELLING ? (
            <>
              <p className="price">{toCurrency(product.price)}</p>
              <div className="add-to-cart">
                <div className="qty">
                  <Input
                    type="number"
                    min="1"
                    value={qty}
                    onChange={e => setQty(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                  />
                </div>
                <Button shadow onClick={handleAddToCart}>
                  {t('Add to cart')}
                </Button>
              </div>
            </>
          ) : (
            <div className="stop-business">{t('Stop business')}</div>
          )}

          <div
            className="description ql-editor"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
      </div>
      <div className="more-info">
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: product.longDescription }}
        />
      </div>
    </Root>
  );
};

export default ProductSummary;
