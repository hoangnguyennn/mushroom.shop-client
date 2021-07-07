import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import HomeStyled from './Home';

import { getTrendingProducts } from '@redux/reducers/product';
import Container from '@components/core/Container';
import ProductList from '@components/Product/List';

const Home = () => {
  const { t } = useTranslation();
  const trendingProducts = useSelector(getTrendingProducts());

  return (
    <HomeStyled>
      <Container>
        <ProductList
          columns={1}
          lg-columns={4}
          title={t('New products')}
          items={trendingProducts}
        />
      </Container>
    </HomeStyled>
  );
};

export default Home;
