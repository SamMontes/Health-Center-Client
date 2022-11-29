import { Button, Stack, TextField, Typography } from '@mui/material';
import useSignupForm from './useSignupForm';

export default function SignupForm() {
  const { formData, formError, handleChange, handleSubmit, handleLogin } =
    useSignupForm();
  return (
    <Stack spacing={2} alignItems='flex-start'>
      <Typography variant='h4' fontWeight={600}>
        Inscribirse
      </Typography>
      <div>
        <Typography variant='h6' fontWeight={700} className='pb-2'>
          Email
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
        />
      </div>
      <div>
        <Typography variant='h6' fontWeight={700} className='pb-2'>
          Nombre de pila
        </Typography>
        <TextField
          name='firstName'
          value={formData?.firstName ?? ''}
          onChange={handleChange}
          size='small'
          required={true}
          error={Boolean(formError?.firstName)}
          helperText={formError?.firstName ?? ''}
        />
      </div>
      <div>
        <Typography variant='h6' fontWeight={700} className='pb-2'>
          Apellido
        </Typography>
        <TextField
          name='lastName'
          value={formData?.lastName ?? ''}
          onChange={handleChange}
          size='small'
          required={true}
          error={Boolean(formError?.lastName)}
          helperText={formError?.lastName ?? ''}
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
        />
      </div>
      <div>
        <Typography variant='h6' fontWeight={700} className='pb-2'>
          Confirmar contraseña
        </Typography>
        <TextField
          name='passwordConfirm'
          value={formData?.passwordConfirm ?? ''}
          onChange={handleChange}
          size='small'
          type='password'
          required={true}
          error={Boolean(formError?.passwordConfirm)}
          helperText={formError?.passwordConfirm ?? ''}
        />
      </div>
      <Button color='inherit' onClick={handleLogin}>
        Iniciar sesión
      </Button>
      <Button variant='contained' onClick={handleSubmit}>
        Registro
      </Button>
    </Stack>
  );
}
