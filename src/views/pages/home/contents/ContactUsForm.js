import { Email, Person, Send } from '@mui/icons-material';
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  ERR_VALIDATION_EMAIL,
  ERR_VALIDATION_TEXT,
  MSG_INPUT_ALL,
} from 'constants/messages';
import { WARNING } from 'constants/strings';
import { checkEmail } from 'lib/strings';
import { sendContactUs } from 'models/contactUsModel';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'views/components/Grid';

export default function ContactUsForm() {
  const { enqueueSnackbar } = useSnackbar();

  const user = useSelector((state) => state?.auth?.user);

  const defaultFormData = {
    email: user?.email ?? '',
    fullName:
      [user?.firstName, user?.lastName].filter((a) => a).join(' ') ?? '',
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [formError, setFormError] = useState({ email: '', fullName: '' });

  const handleChange = (e) => {
    const { name = '', value = '' } = e?.target ?? {};
    if (name) {
      setFormData((s = {}) => ({ ...(s ?? {}), [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {
      email: checkEmail(formData?.email) ? '' : ERR_VALIDATION_EMAIL,
      fullName: formData?.fullName ? '' : ERR_VALIDATION_TEXT,
      message: formData?.message ? '' : ERR_VALIDATION_TEXT,
    };
    setFormError(newErrors);

    return Object.values(newErrors).filter((a) => a).length === 0;
  };

  const handleSubmit = (e) => {
    if (validate()) {
      sendContactUs({
        data: formData,
        onFinish: (res, err) => {
          if (res) {
            enqueueSnackbar('Successfully sent', { variant: 'success' });
          } else {
            enqueueSnackbar(err?.message, { variant: WARNING });
          }
        },
      });
    } else {
      enqueueSnackbar(MSG_INPUT_ALL, { variant: WARNING });
    }
  };

  useEffect(() => {
    if (Object.values(formData).filter((a) => a).length) {
      validate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  useEffect(() => {
    setFormError({});
  }, []);

  return (
    <Stack spacing={2}>
      <Typography variant='h4' fontWeight={600}>
        Envíanos un mensaje
      </Typography>
      <div>
        <Typography variant='h6' fontWeight={700} className='pb-2'>
          Nombre completo
        </Typography>
        <TextField
          name='fullName'
          value={formData?.fullName ?? ''}
          onChange={handleChange}
          size='small'
          required={true}
          error={Boolean(formError?.fullName)}
          helperText={formError?.fullName ?? ''}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Person />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div>
        <Typography variant='h6' fontWeight={700} className='pb-2'>
          Nombre de usuario
        </Typography>
        <TextField
          name='email'
          value={formData?.email ?? ''}
          onChange={handleChange}
          size='small'
          type='email'
          required={true}
          error={Boolean(formError?.email)}
          helperText={formError?.email ?? ''}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Email />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div>
        <Typography variant='h6' fontWeight={700} className='pb-2'>
          Mensaje
        </Typography>
        <TextField
          name='message'
          value={formData?.message ?? ''}
          onChange={handleChange}
          size='small'
          required={true}
          error={Boolean(formError?.message)}
          helperText={formError?.message ?? ''}
          fullWidth={true}
          multiline={true}
          rows={12}
        />
      </div>
      <Grid container className='p-0' spacing={0}>
        <Grid item>
          <Button
            variant='contained'
            onClick={handleSubmit}
            startIcon={<Send />}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
