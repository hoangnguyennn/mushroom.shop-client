import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import Root from './MyAccount';

import Button from '@components/core/Button';
import Form from '@components/core/Form';
import FormGroup from '@components/core/FormGroup';
import Input from '@components/core/Input';
import Invalid from '@components/core/Invalid';
import Loading from '@components/Loading';

import { getIsLoading } from '@redux/reducers/app';
import { getUser, updateUserInfoAction } from '@redux/reducers/auth';
import { IUserUpdateInfo } from '@interfaces/index';

const MyAccount = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userInfo = useSelector(getUser());
  const isLoading = useSelector(getIsLoading());

  const [initialUserInforValues, setInitialUserInforValues] =
    useState<IUserUpdateInfo>({
      fullName: '',
      phone: '',
      address: ''
    });

  const userInforValidationSchema = Yup.object({
    fullName: Yup.string().required(t('This field is required')),
    phone: Yup.string().required(t('This field is required')),
    address: Yup.string().required(t('This field is required'))
  });

  const handleUserFormSubmit = async (
    values: IUserUpdateInfo,
    { setSubmitting }
  ) => {
    try {
      await dispatch(updateUserInfoAction(userInfo.id, values));
      setSubmitting(false);
      toast.success('success');
    } catch (err) {
      toast.error(err.message || 'error');
    }
  };

  const userFormik = useFormik({
    initialValues: initialUserInforValues,
    enableReinitialize: true,
    validationSchema: userInforValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: handleUserFormSubmit
  });

  const initialChangePasswordValues = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };

  const changePasswordValidationSchema = Yup.object({
    oldPassword: Yup.string().required(t('This field is required')),
    newPassword: Yup.string().required(t('This field is required')),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref('newPassword')], t('Password must be same'))
      .required(t('This field is required'))
  });

  const handleChangePasswordSubmit = async (values: any, { setSubmitting }) => {
    const newValues = { password: values.newPassword };
    try {
      await dispatch(updateUserInfoAction(userInfo.id, newValues));
      setSubmitting(false);
      toast.success('success');
    } catch (err) {
      toast.error(err.message || 'error');
    }
  };

  const changePasswordFormik = useFormik({
    initialValues: initialChangePasswordValues,
    validationSchema: changePasswordValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: handleChangePasswordSubmit
  });

  useEffect(() => {
    setInitialUserInforValues(prevState => ({
      ...prevState,
      fullName: userInfo.fullName,
      phone: userInfo.phone,
      address: userInfo.address
    }));
  }, [userInfo]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Root>
      <Form className="user-info" onSubmit={userFormik.handleSubmit}>
        <h3>{t('Account information')}</h3>
        <FormGroup>
          <Input
            name="fullName"
            onBlur={userFormik.handleBlur}
            onChange={userFormik.handleChange}
            placeholder={t('Fullname')}
            required
            value={userFormik.values.fullName}
          />
          {userFormik.errors.fullName ? (
            <Invalid>{userFormik.errors.fullName}</Invalid>
          ) : null}
        </FormGroup>

        <FormGroup>
          <Input
            name="phone"
            onBlur={userFormik.handleBlur}
            onChange={userFormik.handleChange}
            placeholder={t('Phone')}
            required
            value={userFormik.values.phone}
          />
          {userFormik.errors.phone ? (
            <Invalid>{userFormik.errors.phone}</Invalid>
          ) : null}
        </FormGroup>

        <FormGroup>
          <Input
            name="address"
            onBlur={userFormik.handleBlur}
            onChange={userFormik.handleChange}
            placeholder={t('Address')}
            required
            value={userFormik.values.address}
          />
          {userFormik.errors.address ? (
            <Invalid>{userFormik.errors.address}</Invalid>
          ) : null}
        </FormGroup>

        <FormGroup>
          <Button
            shadow
            type="submit"
            className="submit"
            disabled={userFormik.isSubmitting}
          >
            {t('Update')}
          </Button>
        </FormGroup>
      </Form>

      <Form
        className="update-password"
        onSubmit={changePasswordFormik.handleSubmit}
      >
        <h3>{t('Change password')}</h3>

        <FormGroup>
          <Input
            name="oldPassword"
            type="password"
            onBlur={changePasswordFormik.handleBlur}
            onChange={changePasswordFormik.handleChange}
            placeholder={t('Current password')}
            required
            value={changePasswordFormik.values.oldPassword}
          />
          {changePasswordFormik.errors.oldPassword ? (
            <Invalid>{changePasswordFormik.errors.oldPassword}</Invalid>
          ) : null}
        </FormGroup>

        <FormGroup>
          <Input
            name="newPassword"
            type="password"
            onBlur={changePasswordFormik.handleBlur}
            onChange={changePasswordFormik.handleChange}
            placeholder={t('New password')}
            required
            value={changePasswordFormik.values.newPassword}
          />
          {changePasswordFormik.errors.newPassword ? (
            <Invalid>{changePasswordFormik.errors.newPassword}</Invalid>
          ) : null}
        </FormGroup>

        <FormGroup>
          <Input
            name="confirmNewPassword"
            type="password"
            onBlur={changePasswordFormik.handleBlur}
            onChange={changePasswordFormik.handleChange}
            placeholder={t('Confirm new password')}
            required
            value={changePasswordFormik.values.confirmNewPassword}
          />
          {changePasswordFormik.errors.confirmNewPassword ? (
            <Invalid>{changePasswordFormik.errors.confirmNewPassword}</Invalid>
          ) : null}
        </FormGroup>

        <FormGroup>
          <Button
            shadow
            type="submit"
            className="submit"
            disabled={changePasswordFormik.isSubmitting}
          >
            {t('Update')}
          </Button>
        </FormGroup>
      </Form>
    </Root>
  );
};

export default MyAccount;
