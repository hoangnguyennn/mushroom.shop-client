import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '@components/core/Button';
import FormGroup from '@components/core/FormGroup';
import Input from '@components/core/Input';
import Invalid from '@components/core/Invalid';
import RootStyled from './MyAccount';

import { useAppDispatch } from '@hooks/useAppDispatch';
import {
  IUserUpdateInfo,
  IUserUpdatePassword,
  IUserUpdatePasswordForm
} from '@interfaces/index';
import { getUser, updateUser } from '@redux/reducers/auth.reducer';

const MyAccount = () => {
  const dispatch = useAppDispatch();
  const userInfo = useSelector(getUser());

  // update user info
  const [updateInfoInitValues, setUpdateInfoInitValues] =
    useState<IUserUpdateInfo>({
      fullName: '',
      phone: '',
      address: ''
    });

  const updateInfoValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('Trường này là bắt buộc'),
    phone: Yup.string().required('Trường này là bắt buộc'),
    address: Yup.string().required('Trường này là bắt buộc')
  });

  const updateInfoOnSubmit = (
    values: IUserUpdateInfo,
    { setSubmitting }: FormikHelpers<IUserUpdateInfo>
  ) => {
    dispatch(updateUser(values))
      .unwrap()
      .then()
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const updateInfoFormik = useFormik({
    initialValues: updateInfoInitValues,
    enableReinitialize: true,
    onSubmit: updateInfoOnSubmit,
    validationSchema: updateInfoValidationSchema
  });

  useEffect(() => {
    setUpdateInfoInitValues({
      fullName: userInfo.fullName,
      address: userInfo.address,
      phone: userInfo.phone
    });
  }, [userInfo]);

  // update user password
  const updatePasswordInitValues: IUserUpdatePasswordForm = {
    password: '',
    confirmPassword: ''
  };

  const updatePasswordValidationSchema = Yup.object().shape({
    password: Yup.string().required('Trường này là bắt buộc'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Mật khẩu phải giống nhau')
      .required('Trường này là bắt buộc')
  });

  const updatePasswordOnSubmit = (
    values: IUserUpdatePasswordForm,
    { setSubmitting }: FormikHelpers<IUserUpdatePasswordForm>
  ) => {
    const userPassword: IUserUpdatePassword = {
      password: values.password
    };

    dispatch(updateUser(userPassword))
      .unwrap()
      .then()
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const updatePasswordFormik = useFormik({
    initialValues: updatePasswordInitValues,
    onSubmit: updatePasswordOnSubmit,
    validationSchema: updatePasswordValidationSchema
  });

  return (
    <RootStyled>
      <form className="user-info" onSubmit={updateInfoFormik.handleSubmit}>
        <h3 className="title">Thông tin tài khoản</h3>

        <FormGroup>
          <label htmlFor="fullName">Họ tên</label>
          <Input
            id="fullName"
            name="fullName"
            value={updateInfoFormik.values.fullName}
            onChange={updateInfoFormik.handleChange}
            invalid={!!updateInfoFormik.errors.fullName}
          />
          {updateInfoFormik.errors.fullName && (
            <Invalid>{updateInfoFormik.errors.fullName}</Invalid>
          )}
        </FormGroup>

        <FormGroup>
          <label htmlFor="phone">Số điện thoại</label>
          <Input
            id="phone"
            name="phone"
            value={updateInfoFormik.values.phone}
            onChange={updateInfoFormik.handleChange}
            invalid={!!updateInfoFormik.errors.phone}
          />
          {updateInfoFormik.errors.phone && (
            <Invalid>{updateInfoFormik.errors.phone}</Invalid>
          )}
        </FormGroup>

        <FormGroup>
          <label htmlFor="address">Địa chỉ</label>
          <Input
            id="address"
            name="address"
            value={updateInfoFormik.values.address}
            onChange={updateInfoFormik.handleChange}
            invalid={!!updateInfoFormik.errors.address}
          />
          {updateInfoFormik.errors.address && (
            <Invalid>{updateInfoFormik.errors.address}</Invalid>
          )}
        </FormGroup>

        <FormGroup>
          <Button type="submit">Cập nhật</Button>
        </FormGroup>
      </form>

      <form
        className="update-password"
        onSubmit={updatePasswordFormik.handleSubmit}
      >
        <h3 className="title">Đổi mật khẩu</h3>

        <FormGroup>
          <label htmlFor="password">Mật khẩu mới</label>
          <Input
            type="password"
            id="password"
            name="password"
            value={updatePasswordFormik.values.password}
            onChange={updatePasswordFormik.handleChange}
            invalid={!!updatePasswordFormik.errors.password}
          />
          {updatePasswordFormik.errors.password && (
            <Invalid>{updatePasswordFormik.errors.password}</Invalid>
          )}
        </FormGroup>

        <FormGroup>
          <label htmlFor="confirmPassword">Nhập lại mật khẩu mới</label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={updatePasswordFormik.values.confirmPassword}
            onChange={updatePasswordFormik.handleChange}
            invalid={!!updatePasswordFormik.errors.confirmPassword}
          />
          {updatePasswordFormik.errors.confirmPassword && (
            <Invalid>{updatePasswordFormik.errors.confirmPassword}</Invalid>
          )}
        </FormGroup>

        <FormGroup>
          <Button type="submit">Cập nhật</Button>
        </FormGroup>
      </form>
    </RootStyled>
  );
};

export default MyAccount;
