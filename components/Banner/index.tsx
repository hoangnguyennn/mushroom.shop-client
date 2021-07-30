import Button from '@components/core/Button';
import Container from '@components/core/Container';
import Link from 'next/link';
import RootStyled from './Banner';

const Banner = () => {
  return (
    <RootStyled>
      <Container>
        <div className="intro">
          <h2 className="title">Nấm sạch - Niềm vui và sức khỏe</h2>
          <div className="actions">
            <Link href="/products">
              <Button>Mua nấm ngay</Button>
            </Link>
          </div>
        </div>
      </Container>
    </RootStyled>
  );
};

export default Banner;
