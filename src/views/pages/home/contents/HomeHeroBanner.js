import { AccessTimeFilled, LocationOn } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import img5Doctors from 'assets/images/5doctors.png';
import { Grid } from 'views/components/Grid';
import IconButtonWithLabel from 'views/components/IconButtonWithLabel';
import Img from 'views/components/Img';
import BannerCards from './BannerCards';

export default function HomeHeroBanner() {
  return (
    <div className='bg-info text-white-light sm:h-200 flex flex-col justify-center relative'>
      <Container className='relative'>
        <Grid container justifyContent='center' alignItems='center'>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Stack spacing={4}>
              <Typography variant='h3' fontWeight={800} color='inherit'>
                Te haremos sonreír,
                <br /> aunque no creas
              </Typography>
              <Typography variant='h6' fontWeight={300} color='inherit'>
                No nos conformamos con la media. Nuestro objetivo es servirle y
                tratarle con métodos juiciosos. Clínicamente, esto repercute en
                la previsibilidad y alta durabilidad del trabajo realizado.
              </Typography>
              <Grid container spacing={0} className='p-0'>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <IconButtonWithLabel label='El Salvador'>
                    <LocationOn fontSize='large' />
                  </IconButtonWithLabel>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <IconButtonWithLabel label='08:00 AM - 08:00 PM'>
                    <AccessTimeFilled fontSize='large' />
                  </IconButtonWithLabel>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Img src={img5Doctors} />
          </Grid>
        </Grid>
      </Container>

      <div className='relative sm:absolute sm:bottom-0 sm:left-1/2 sm:translate-y-1/2 sm:-translate-x-1/2 w-full'>
        <BannerCards />
      </div>
    </div>
  );
}
