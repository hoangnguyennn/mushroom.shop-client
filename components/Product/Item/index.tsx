import {
  FC,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import ProductItemStyled from './ProductItem';

import { getIsDesktop } from '@redux/reducers/app';
import { imageUrlToSpecificSize } from '@utils/converter';
import { IProductWithLink } from '@interfaces/index';
import { toCurrency } from '@utils/formatter';
import breakpoint from '@configs/breakpoint';

type ProductItemProps = IProductWithLink & {
  addToCart: () => any;
};

const Wrap: FC<{ link?: string }> = ({ children, link }) => {
  if (link) {
    return (
      <Link href={link}>
        <ProductItemStyled href={link}>{children}</ProductItemStyled>
      </Link>
    );
  }

  return <ProductItemStyled as="div">{children}</ProductItemStyled>;
};

const ProductItem: FC<ProductItemProps> = ({
  link,
  name,
  price,
  images,
  unit,
  addToCart
}) => {
  const { t } = useTranslation();

  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useSelector(getIsDesktop());
  const [imageSize, setImageSize] = useState(
    isDesktop ? breakpoint.desktop.productItemImage : 0
  );

  const imageUrl = useCallback(
    (image: string) => imageUrlToSpecificSize(image, imageSize, imageSize),
    [imageSize]
  );

  const handleAddToCartClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addToCart();
  };

  useEffect(() => {
    if (imageWrapRef.current?.offsetWidth) {
      setImageSize(imageWrapRef.current?.offsetWidth);
    }
  }, [imageWrapRef.current]);

  return (
    <Wrap link={link}>
      <div className="wrap">
        <div className="thumbnail" ref={imageWrapRef}>
          <img
            src={imageUrl(images[0] || '')}
            alt={name}
            loading="lazy"
            style={{
              width: `${imageSize}px`,
              height: `${imageSize}px`,
              ...(imageUrl(images[0] || '') ? {} : { paddingTop: '100%' })
            }}
          />
        </div>
        <div className="info">
          <p className="name">{name}</p>
          <p className="price">
            {toCurrency(price)}
            <span className="unit"> / {unit}</span>
          </p>
        </div>
      </div>
      {isDesktop && (
        <div className="add-to-cart">
          <button onClick={handleAddToCartClick}>{t('Add to cart')}</button>
        </div>
      )}
    </Wrap>
  );
};

export default ProductItem;
