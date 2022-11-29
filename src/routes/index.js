import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'views/layout';
import Error404 from 'views/pages/errors/Error404';
import Home from 'views/pages/home';
import Login from 'views/pages/login';
import Signup from 'views/pages/signup';

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
