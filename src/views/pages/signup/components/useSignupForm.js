import {
  ERR_PASSWORD_CONFIRM,
  ERR_VALIDATION_EMAIL,
  ERR_VALIDATION_PASSWORD,
  ERR_VALIDATION_TEXT,
} from 'constants/messages';
import { WARNING } from 'constants/strings';
import { checkEmail, checkPassword } from 'lib/strings';
import { register } from 'models/userModel';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useLoginForm() {
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    passwordConfirm: '',
  });
  const [formError, setFormError] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    passwordConfirm: '',
  });

  const handleChange = (e) => {
    const { name = '', value = '' } = e?.target ?? {};
    if (name) {
      setFormData((s = {}) => ({ ...(s ?? {}), [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {
      email: checkEmail(formData?.email) ? '' : ERR_VALIDATION_EMAIL,
      password: checkPassword(formData.password) ? '' : ERR_VALIDATION_PASSWORD,
      passwordConfirm:
        formData.password === formData?.passwordConfirm
          ? ''
          : ERR_PASSWORD_CONFIRM,
      firstName: (formData.firstName ?? '').trim() ? '' : ERR_VALIDATION_TEXT,
      lastName: (formData.lastName ?? '').trim() ? '' : ERR_VALIDATION_TEXT,
    };
    setFormError(newErrors);

    return Object.values(newErrors).filter((a) => a).length === 0;
  };

  const handleSubmit = (e) => {
    if (validate()) {
      register({
        data: formData,
        onFinish: (res, err) => {
          if (res) {
            enqueueSnackbar('Successfully registered. Please login.', {
              variant: 'success',
            });
            handleLogin();
          } else {
            enqueueSnackbar(err?.message, { variant: WARNING });
          }
        },
      });
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    if (Object.values(formData).filter((a) => a).length) {
      validate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  return {
    formData,
    setFormData,
    formError,
    setFormError,
    handleChange,
    validate,
    handleSubmit,
    handleLogin,
  };
}
