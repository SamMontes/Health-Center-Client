import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Grid } from 'views/components/Grid';
import ReviewIntroCard from 'views/components/ReviewIntroCard';
import avatar1 from 'assets/images/avatars/avatar (1).png';
import avatar2 from 'assets/images/avatars/avatar (2).png';
import avatar3 from 'assets/images/avatars/avatar (3).png';
import avatar4 from 'assets/images/avatars/avatar (4).png';

export default function TestimonialsSection() {
  return (
    <div className='py-4'>
      <Container>
        <Stack spacing={2}>
          <Typography variant='h4' align='center'>
            Testimonios
          </Typography>
          <Grid container spacing={12}>
            {[
              {
                description:
                  'No nos conformamos con la media. Nuestro objetivo es servirle y tratarle con métodos juiciosos. Clínicamente, esto repercute en la previsibilidad y alta durabilidad del trabajo realizado.',
                avatar: avatar1,
                userName: 'Paulo Jonás',
                userTitle: 'Hermano',
              },
              {
                description:
                  'No nos conformamos con la media. Nuestro objetivo es servirle y tratarle con métodos juiciosos. Clínicamente, esto repercute en la previsibilidad y alta durabilidad del trabajo realizado.',
                avatar: avatar2,
                userName: 'Jazmín',
                userTitle: 'Mamá',
              },
              {
                description:
                  'No nos conformamos con la media. Nuestro objetivo es servirle y tratarle con métodos juiciosos. Clínicamente, esto repercute en la previsibilidad y alta durabilidad del trabajo realizado.',
                avatar: avatar3,
                userName: 'Olivia',
                userTitle: 'Trabajadora',
              },
              {
                description:
                  'No nos conformamos con la media. Nuestro objetivo es servirle y tratarle con métodos juiciosos. Clínicamente, esto repercute en la previsibilidad y alta durabilidad del trabajo realizado.',
                avatar: avatar4,
                userName: 'Elisa',
                userTitle: 'Editora',
              },
            ].map((item, itemIndex) => (
              <Grid item key={itemIndex} lg={6} md={6} sm={12} xs={12}>
                <ReviewIntroCard
                  description={item.description}
                  avatar={item.avatar}
                  userName={item.userName}
                  userTitle={item.userTitle}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}
