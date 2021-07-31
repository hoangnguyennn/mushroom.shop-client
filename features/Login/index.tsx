import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { ILogin } from '@interfaces/index';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { getToken, login } from '@redux/reducers/auth.reducer';

import Button from '@components/core/Button';
import FormGroup from '@components/core/FormGroup';
import Input from '@components/core/Input';
import RootStyled from './Login';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const token = useSelector(getToken());

  const initialValues: ILogin = {
    email: '',
    password: ''
  };

  const onSubmit = (values: ILogin) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        router.replace('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit
  });

  useEffect(() => {
    token && router.push('/');
  }, [token]);

  return (
    <RootStyled onSubmit={formik.handleSubmit}>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          name="email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="password">Mật khẩu</label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </FormGroup>

      <FormGroup className="forgot-password">
        <Link href="/">
          <a>Quên mật khẩu</a>
        </Link>
      </FormGroup>

      <FormGroup>
        <Button type="submit" inline={false}>
          Đăng nhập
        </Button>
      </FormGroup>

      <FormGroup className="goto-signup">
        Bạn chưa có tài khoản? Vui lòng đăng ký tài khoản mới{' '}
        <Link href="/register">
          <a>tại đây</a>
        </Link>
      </FormGroup>
    </RootStyled>
  );
};

export default Login;
