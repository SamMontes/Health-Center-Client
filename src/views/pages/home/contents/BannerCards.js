import { Container } from '@mui/material';
import CalendarDone from 'assets/images/svgs/CalendarDone.svg';
import StarRibbon from 'assets/images/svgs/StarRibbon.svg';
import Technology from 'assets/images/svgs/Technology.svg';
import React from 'react';
import { Grid } from 'views/components/Grid';
import IntroCard from 'views/components/IntroCard';

export default function BannerCards() {
  return (
    <Container>
      <Grid container justifyContent='center' alignItems='center' spacing={12}>
        {[
          {
            variant: 'error',
            icon: Technology,
            label: 'Tecnología',
            caption:
              'Estamos a la vanguardia de la tecnología, esto para hacer funcionar todo de una forma más sencilla.',
          },
          {
            variant: 'warning',
            icon: StarRibbon,
            label: 'Calificados',
            caption:
              'Serás atendido por los mejores médicos, tenemos un fuerte compromiso para hacerte sentir bien.',
          },
          {
            variant: 'pink',
            icon: CalendarDone,
            label: 'Optimización',
            caption:
              'Contamos con un servicio de optimización, lo que hará que se te sea muy fácil reservar una cita con nosotros.',
          },
        ].map((item, itemIndex) => (
          <Grid key={itemIndex} item lg={4} md={4} sm={4} xs={12}>
            <IntroCard
              variant={item.variant}
              icon={item.icon}
              label={item.label}
              caption={item.caption}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
