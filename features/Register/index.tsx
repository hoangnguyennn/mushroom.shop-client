import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import Button from '@components/core/Button';
import FormGroup from '@components/core/FormGroup';
import Input from '@components/core/Input';
import RootStyled from './Register';
import { IRegister, IRegisterForm } from '@interfaces/index';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { register } from '@redux/reducers/auth.reducer';
import Invalid from '@components/core/Invalid';

const Register = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const initialValues: IRegisterForm = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  const registerSchema = Yup.object().shape({
    fullName: Yup.string().required('Trường này là bắt buộc'),
    email: Yup.string()
      .email('Email không hợp lệ')
      .required('Trường này là bắt buộc'),
    phone: Yup.string().required('Trường này là bắt buộc'),
    password: Yup.string().required('Trường này là bắt buộc'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Mật khẩu phải giống nhau')
      .required('Trường này là bắt buộc')
  });

  const onSubmit = (
    values: IRegisterForm,
    { setSubmitting }: FormikHelpers<IRegisterForm>
  ) => {
    const registerData: IRegister = {
      email: values.email,
      password: values.password,
      fullName: values.fullName,
      phone: values.phone
    };

    dispatch(register(registerData))
      .unwrap()
      .then(() => {
        router.replace('/login');
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: registerSchema
  });

  return (
    <RootStyled onSubmit={formik.handleSubmit}>
      <FormGroup>
        <label htmlFor="fullName">Họ tên</label>
        <Input
          id="fullName"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          invalid={!!formik.errors.fullName}
        />
        {formik.errors.fullName && <Invalid>{formik.errors.fullName}</Invalid>}
      </FormGroup>

      <FormGroup>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          invalid={!!formik.errors.email}
        />
        {formik.errors.email && <Invalid>{formik.errors.email}</Invalid>}
      </FormGroup>

      <FormGroup>
        <label htmlFor="phone">Số điện thoại</label>
        <Input
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          invalid={!!formik.errors.phone}
        />
        {formik.errors.phone && <Invalid>{formik.errors.phone}</Invalid>}
      </FormGroup>

      <FormGroup>
        <label htmlFor="password">Mật khẩu</label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          invalid={!!formik.errors.password}
        />
        {formik.errors.password && <Invalid>{formik.errors.password}</Invalid>}
      </FormGroup>

      <FormGroup>
        <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          invalid={!!formik.errors.confirmPassword}
        />
        {formik.errors.confirmPassword && (
          <Invalid>{formik.errors.confirmPassword}</Invalid>
        )}
      </FormGroup>

      <FormGroup>
        <Button type="submit" inline={false} disabled={formik.isSubmitting}>
          Đăng ký
        </Button>
      </FormGroup>
    </RootStyled>
  );
};

export default Register;
