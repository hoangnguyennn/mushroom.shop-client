import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import Link from 'next/link';

import LoginStyled from './Login';

import Button from '@components/core/Button';
import FormGroup from '@components/core/FormGroup';
import Input from '@components/core/Input';
import Invalid from '@components/core/Invalid';

import { getToken, loginAction } from '@redux/reducers/auth';
import { ILogin } from '@interfaces/index';
import { PATH_NAME } from '@configs/pathName';

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useSelector(getToken());

  const initialValues: ILogin = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().required(t('This field is required')),
    password: Yup.string().required(t('This field is required'))
  });

  const handleSubmit = async (values: ILogin, { setSubmitting }) => {
    try {
      await dispatch(loginAction(values));
      setSubmitting(false);
      toast.success('success');
    } catch (err) {
      toast.error(err.message || 'error');
    }

    if (token) {
      router.replace(PATH_NAME.HOME);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: handleSubmit
  });

  useEffect(() => {
    if (token) {
      router.push(PATH_NAME.HOME);
    }
  }, [token]);

  return (
    <LoginStyled onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Input
          value={formik.values.email}
          name="email"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={t('Your email')}
        />
        {formik.errors.email ? <Invalid>{formik.errors.email}</Invalid> : null}
      </FormGroup>

      <FormGroup>
        <Input
          type="password"
          value={formik.values.password}
          name="password"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={t('Enter password')}
        />
        {formik.errors.password ? (
          <Invalid>{formik.errors.password}</Invalid>
        ) : null}
      </FormGroup>

      <FormGroup className="actions">
        <div></div>
        <Link href={PATH_NAME.HOME}>
          <a>{t('Forgotten password?')}</a>
        </Link>
      </FormGroup>

      <FormGroup>
        <Button
          shadow
          className="submit"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {t('Login')}
        </Button>
      </FormGroup>

      <FormGroup className="sign-up">
        {t('Not have account')}{' '}
        <Link href={PATH_NAME.REGISTER}>
          <a>{t('Here')}</a>
        </Link>
      </FormGroup>
    </LoginStyled>
  );
};

export default Login;
