import RootStyled from './Home';

import Banner from '@components/Banner';
import ProductList from '@components/Product/List';
import Container from '@components/core/Container';
import { useSelector } from 'react-redux';
import { getTrendingProducts } from '@redux/reducers/product.reducer';

const Home = () => {
  const trendingProducts = useSelector(getTrendingProducts());

  return (
    <RootStyled>
      <Banner />
      <Container>
        <ProductList list={trendingProducts} viewMore />
      </Container>
    </RootStyled>
  );
};

export default Home;
