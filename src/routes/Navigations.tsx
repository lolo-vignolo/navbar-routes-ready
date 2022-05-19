import logo from '../logo.svg';

import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import { routes } from './routes';
import { Suspense } from 'react';

const Navigations = () => {
  const myRoutes = routes;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {myRoutes.map((route) => (
                <li key={route.to}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {myRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigations;
