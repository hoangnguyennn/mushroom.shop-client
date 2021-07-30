import { IoHeartOutline } from 'react-icons/io5';
import Col from '@components/core/Col';
import Container from '@components/core/Container';
import Row from '@components/core/Row';
import Widget from '@components/Widget';
import RootStyled from './Footer';

const Footer = () => {
  return (
    <RootStyled>
      <div className="navigation">
        <Container>
          <Row>
            <Col>
              <Widget />
            </Col>
            <Col>
              <Widget />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright">
        <Container>
          <p className="text">
            &copy; All rights reverved. Made by&nbsp;
            <a
              href="https://github.com/hoangnguyennn"
              target="_blank"
              rel="noreferrer"
            >
              hoangnguyen
            </a>
            <IoHeartOutline size={20} color="#f72585" />
          </p>
        </Container>
      </div>
    </RootStyled>
  );
};

export default Footer;
