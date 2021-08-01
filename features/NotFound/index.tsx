import Image from 'next/image';
import Link from 'next/link';

import RootStyled from './NotFound';

import Button from '@components/core/Button';
import Container from '@components/core/Container';

import sadIcon from '@assets/images/sad.png';

const NotFound = () => {
  return (
    <RootStyled>
      <Container>
        <div className="content">
          <Image src={sadIcon} alt="Not found" loading="lazy" />
          <h2>404</h2>
          <p>
            Xin lỗi, địa chỉ bạn bạn truy cập không tồn tại!
            <br />
            Có thể URL đã bị hỏng hoặc đã bị quản trị viên xóa bỏ.
          </p>
          <Link href="/" passHref>
            <Button as="a" className="back-to-home">
              <i className="czi-home mr-1"></i> Quay lại trang chủ
            </Button>
          </Link>
        </div>
      </Container>
    </RootStyled>
  );
};

export default NotFound;
