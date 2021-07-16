import { FormEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { PATH_NAME } from '@configs/pathName';
import { removeFalsyFields } from '@utils/converter';
import { sameObject } from '@utils/comparison';
import Input from '@components/core/Input';
import Root from './FormSearch';

const FormSearch = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [productName, setProductName] = useState('');

  const filterByName = (event: FormEvent | KeyboardEvent) => {
    event.preventDefault();
    if (!productName.length) {
      return;
    }

    const query = removeFalsyFields({
      ...router.query,
      name: productName
    });

    if (!sameObject(query, router.query)) {
      router.push({ pathname: PATH_NAME.PRODUCTS, query });
    }
  };

  const handleInputKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      filterByName(event);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const { name } = router.query;

      if (name) {
        if (name instanceof Array) {
          setProductName(name[0]);
        } else {
          setProductName(name);
        }
      } else {
        setProductName('');
      }
    }

    return () => {
      isMounted = false;
    };
  }, [JSON.stringify(router.query)]);

  return (
    <Root onSubmit={filterByName} method="post">
      <Input
        type="text"
        className="form-search__input"
        value={productName}
        onChange={event => setProductName(event.target.value)}
        onKeyUp={handleInputKeyUp}
        placeholder={t('Enter product name')}
      />
      <button className="form-search__submit czi-search"></button>
    </Root>
  );
};

export default FormSearch;
