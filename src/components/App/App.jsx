import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import globalStyles from 'components/GlobalStyle';
import { Toaster } from 'react-hot-toast';
import Layout from '../Layout /Layout';
import { refreshUser } from 'redux/auth/authOperation';
import { useAuth } from 'hooks/useAuth';
import Loader from 'components/Loader/Loader';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';
import { Container } from '@mui/material';
import NotFound from 'components/NotFound/NotFound';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const LogInPage = lazy(() => import('pages/LogInPage/LogInPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path='/register'
            element={
              <RestrictedRoute
                redirectTo='/contacts'
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path='/login'
            element={
              <RestrictedRoute
                redirectTo='/contacts'
                component={<LogInPage />}
              />
            }
          />
          <Route
            path='/contacts'
            element={
              <PrivateRoute redirectTo='/login' component={<ContactsPage />} />
            }
          />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <Global styles={globalStyles} />
    </Container>
  );
}

export default App;
