import {
  ChangeEvent,
  Dispatch,
  FC,
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Link from 'next/link';

import Root from './Filter';

import { getCategories } from '@redux/reducers/category';
import { getProductUnits } from '@redux/reducers/productUnit';
import { numberWithDot } from '@utils/formatter';
import { PATH_NAME } from '@configs/pathName';
import { removeFalsyFields } from '@utils/converter';
import { sameObject } from '@utils/comparison';
import { IObject } from '@interfaces/index';

type ProductFilterProps = IObject;

const ProductFilter: FC<ProductFilterProps> = ({ className }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const categories = useSelector(getCategories());
  const productUnits = useSelector(getProductUnits());

  const [productName, setProductName] = useState('');
  const [priceFrom, setPriceFrom] = useState('0');
  const [priceTo, setPriceTo] = useState('0');

  const { category: currentCategory, unit: currentUnit } = router.query;

  const setPrice = (
    event: ChangeEvent<HTMLInputElement>,
    setState: Dispatch<SetStateAction<any>>
  ) => {
    const value = event.target.value.split('.').join('');

    if (value.length === 0) {
      setState('0');
    } else {
      setState(String(Number(value)));
    }
  };

  const clearAllFilter = () => {
    router.push(PATH_NAME.PRODUCTS);
  };

  const clearFilterByUnit = () => {
    const query = removeFalsyFields({
      ...router.query,
      unit: undefined
    });
    if (sameObject(query, router.query)) {
      return;
    }

    router.push({ query });
  };

  const disableKeyPressCharacter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (isNaN(Number(event.key))) {
      event.preventDefault();
    }
  };

  const filterByName = () => {
    if (!productName.length) {
      return;
    }

    const query = removeFalsyFields({
      ...router.query,
      name: productName
    });

    if (sameObject(query, router.query)) {
      return;
    }

    router.push({ query });
  };

  const filterByPrice = (event: MouseEvent) => {
    event.preventDefault();
    let priceFilter = undefined;
    if (!isNaN(Number(priceFrom)) && !isNaN(Number(priceTo))) {
      priceFilter = `${priceFrom}-${priceTo}`;

      if (Number(priceFrom) > Number(priceTo)) {
        priceFilter = `${priceTo}-${priceFrom}`;
      }
    }

    const query = removeFalsyFields({
      ...router.query,
      price: priceFilter
    });

    if (sameObject(query, router.query)) {
      return;
    }

    router.push({ query });
  };

  const filterByUnit = (unitId: string) => {
    const query = removeFalsyFields({
      ...router.query,
      unit: unitId
    });

    router.push({ query });
  };

  const handleInputNameKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      filterByName();
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const { name } = router.query;
      let { price } = router.query;

      if (price) {
        if (price instanceof Array) {
          price = price[0];
        }

        const priceSplit = price.split('-');
        setPriceFrom(String(Number(priceSplit[0]) || 0));
        setPriceTo(String(Number(priceSplit[1]) || 0));
      } else {
        setPriceFrom('0');
        setPriceTo('0');
      }

      if (name) {
        setProductName(name as string);
      } else {
        setProductName('');
      }
    } else {
      console.log('unmounted');
    }

    return () => {
      isMounted = false;
    };
  }, [JSON.stringify(router.query)]);

  return (
    <Root
      className={className}
      onSubmit={() => false}
      method="post"
      name="form"
    >
      <div className="filter-item">
        <button className="delete-all" type="button" onClick={clearAllFilter}>
          {t('Delete all')}
        </button>
      </div>
      <div className="filter-item">
        <h4 className="title">{t('Product name')}</h4>
        <div className="product-name">
          <input
            name="name"
            value={productName}
            onChange={event => setProductName(event.target.value)}
            onKeyPress={handleInputNameKeyPress}
            placeholder={t('Enter product name')}
          />
        </div>
      </div>
      <div className="filter-item">
        <h4 className="title">{t('Category')}</h4>
        <ul className="categories">
          {categories.map(category => (
            <li
              key={category.id}
              className={classNames({
                active: currentCategory === category.slug
              })}
            >
              <Link
                href={{
                  pathname: `/${category.slug}`,
                  query: removeFalsyFields({
                    ...router.query,
                    category: undefined
                  })
                }}
              >
                <a>
                  {category.name} ({category.productsLength})
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-item">
        <h4 className="title">{t('Layered')}</h4>
        <div className="product-units">
          <ul className="units">
            <li
              onClick={clearFilterByUnit}
              className={classNames({ active: !currentUnit })}
            >
              {t('All')}
            </li>
            {productUnits.map(unit => (
              <li
                key={unit.id}
                onClick={() => filterByUnit(unit.id)}
                className={classNames({ active: currentUnit === unit.id })}
              >
                {unit.name} ({unit.productsLength})
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="filter-item">
        <h4 className="title">{t('Price')}</h4>
        <div className="price-small-text">{t('Select price range')}</div>
        <div className="price-range">
          <input
            value={numberWithDot(priceFrom)}
            onChange={event => setPrice(event, setPriceFrom)}
            onKeyPress={disableKeyPressCharacter}
            onPaste={() => false}
          />
          <span>&nbsp;-&nbsp;</span>
          <input
            value={numberWithDot(priceTo)}
            onChange={event => setPrice(event, setPriceTo)}
            onKeyPress={disableKeyPressCharacter}
            onPaste={() => false}
          />
        </div>
        <button className="submit-filter-price" onClick={filterByPrice}>
          {t('Apply')}
        </button>
      </div>
    </Root>
  );
};

export default ProductFilter;
