import { Key, Login, Person, PersonAdd } from '@mui/icons-material';
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import useLoginForm from './useLoginForm';

export default function LoginForm() {
  const { formData, formError, handleChange, handleSubmit, handleSignup } =
    useLoginForm();
  return (
    <Stack spacing={2} alignItems='flex-start'>
      <Typography variant='h4' fontWeight={600}>
        Iniciar sesión
      </Typography>
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
                <Person />
              </InputAdornment>
            ),
            className: 'rounded-3xl',
          }}
        />
      </div>
      <div>
        <Typography variant='h6' fontWeight={700} className='pb-2'>
          Contraseña
        </Typography>
        <TextField
          name='password'
          value={formData?.password ?? ''}
          onChange={handleChange}
          size='small'
          type='password'
          required={true}
          error={Boolean(formError?.password)}
          helperText={formError?.password ?? ''}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Key />
              </InputAdornment>
            ),
            className: 'rounded-3xl',
          }}
        />
      </div>
      <Button color='inherit' onClick={handleSignup} startIcon={<PersonAdd />}>
        registrarse
      </Button>
      <Button variant='contained' onClick={handleSubmit} startIcon={<Login />}>
        Iniciar Sesión
      </Button>
    </Stack>
  );
}
