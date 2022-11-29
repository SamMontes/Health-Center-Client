import { Grid } from '@mui/material';
import g10 from 'assets/images/g10.png';
import Img from 'views/components/Img';
import LoginForm from './components/LoginForm';

export default function LoginContent() {
  return (
    <Grid container justifyContent='center' alignItems='center' spacing={8}>
      <Grid item lg={7} md={7} sm={7} xs={false} className='flex justify-end'>
        <Img src={g10} />
      </Grid>
      <Grid item lg={5} md={5} sm={5} xs={12}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}
