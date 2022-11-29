import {
  ERR_VALIDATION_EMAIL,
  ERR_VALIDATION_PASSWORD, MSG_INPUT_ALL
} from 'constants/messages';
import { WARNING } from 'constants/strings';
import { checkEmail, checkPassword } from 'lib/strings';
import { login } from 'models/userModel';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function useLoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  // const isAuth = useSelector((state) => state?.auth?.isAuth);

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name = '', value = '' } = e?.target ?? {};
    if (name) {
      setFormData((s = {}) => ({ ...(s ?? {}), [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {
      email: checkEmail(formData?.email) ? '' : ERR_VALIDATION_EMAIL,
      password: checkPassword(formData?.password)
        ? ''
        : ERR_VALIDATION_PASSWORD,
    };
    setFormError(newErrors);

    return Object.values(newErrors).filter((a) => a).length === 0;
  };

  const handleSubmit = (e) => {
    if (validate()) {
      login({
        data: formData,
        onFinish: (res, err) => {
          if (res) {
            dispatch({
              type: 'SET_AUTH',
              payload: { isAuth: true, token: res?.token, user: res },
            });
            enqueueSnackbar('Successfully logged in', { variant: 'success' });
            navigate('/');
          } else {
            enqueueSnackbar(err?.message, { variant: WARNING });
          }
        },
      });
    } else {
      enqueueSnackbar(MSG_INPUT_ALL, { variant: WARNING });
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  useEffect(() => {
    if (Object.values(formData).filter((a) => a).length) {
      validate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  // useEffect(() => {
  //   if (isAuth) {
  //     navigate('/');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuth]);

  return {
    formData,
    setFormData,
    formError,
    setFormError,
    handleChange,
    validate,
    handleSubmit,
    handleSignup,
  };
}
