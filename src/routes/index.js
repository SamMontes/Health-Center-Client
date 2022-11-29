import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Layout from 'views/layout';
import SidebarLayout from 'views/layout/sidebarLayout';
import Appointment from 'views/pages/appointment';
import DatingHistory from 'views/pages/dating-history';
import DatingHistoryDetail from 'views/pages/dating-history/components/DatingHistoryDetail';
import DoctorProfile from 'views/pages/doctor-profile';
import Error404 from 'views/pages/errors/Error404';
import Home from 'views/pages/home';
import Login from 'views/pages/login';
import MedicalHistory from 'views/pages/medical-history';
import MedicalHistoryDetail from 'views/pages/medical-history/components/MedicalHistoryDetail';
import Signup from 'views/pages/signup';
import UserProfile from 'views/pages/user-profile';

export default function Root() {
  const pathname = window.location.pathname;

  const isCenter =
    pathname === '/login' || pathname === '/signup' || pathname === '/';

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout isCenter={isCenter} />}>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          <Route path='/' element={<SidebarLayout />}>
            <Route path='/appointment' element={<Appointment />} />

            <Route path='/medical-history' element={<Outlet />}>
              <Route index element={<MedicalHistory />} />
              <Route path=':id' element={<MedicalHistoryDetail />} />
            </Route>

            <Route path='/dating-history' element={<Outlet />}>
              <Route index element={<DatingHistory />} />
              <Route path=':id' element={<DatingHistoryDetail />} />
            </Route>

            <Route path='/user-profile' element={<UserProfile />} />
            <Route path='/doctor-profile' element={<DoctorProfile />} />
          </Route>

          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
