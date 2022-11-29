import { LogoutOutlined } from '@mui/icons-material';
import { Button, Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from 'views/components/Logo';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state?.auth?.isAuth);

  const handleLogOut = () => {
    dispatch({ type: 'RESET_AUTH' });
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <div className='bg-white-light'>
      <Container>
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          className='h-16'
        >
          <Grid item>
            <Link to='/'>
              <Logo />
            </Link>
          </Grid>
          <Grid item>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              spacing={2}
            >
              {isAuth ? (
                <Grid item>
                  <Button variant='contained' size='small'>
                    Inicio
                  </Button>
                </Grid>
              ) : !(location.pathname === '/login') ? (
                <Grid item>
                  <Link to='/login'>
                    <Button variant='contained' size='small'>
                      Iniciar sesión
                    </Button>
                  </Link>
                </Grid>
              ) : null}
              {isAuth ? (
                <Grid item>
                  <Button
                    onClick={handleLogOut}
                    variant='contained'
                    size='small'
                    color='error'
                    startIcon={<LogoutOutlined />}
                  >
                    cerrar sesión
                  </Button>
                </Grid>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
