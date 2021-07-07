import { widgets } from '@configs/mockData';

import FooterStyled from './Footer';

import Col from '@components/core/Col';
import Container from '@components/core/Container';
import Row from '@components/core/Row';
import Widget from '@components/Widget';

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-navigation">
        <Container>
          <Row>
            <Col lg={6}>
              <Widget title="About us" list={widgets[0]} />
            </Col>
            <Col lg={6}>
              <Widget title="Account &amp; Shipping Info" list={widgets[0]} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-copyright">
        <Container>
          <p className="copyright-text">
            &copy; All rights reserved. Made by&nbsp;
            <a
              href="https://github.com/hoangnguyennn"
              target="_blank"
              rel="noreferrer"
              className="copyright"
            >
              hoangnguyennn
            </a>
            <i className="czi-heart"></i>
          </p>
        </Container>
      </div>
    </FooterStyled>
  );
};

export default Footer;
