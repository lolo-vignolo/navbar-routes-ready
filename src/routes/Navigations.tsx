import logo from '../logo.svg';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

import {
  FormikAbstract,
  FormikBasicPage,
  FormikComponent,
  FormikYupPage,
  RegisterPage,
} from '../03-forms/pages';

const Navigations = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikYup"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                FormikYup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/FormikComponent"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                FormikComponent
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/FormikAbstract"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                FormikAbstract
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="formik" element={<FormikBasicPage />} />
          <Route path="formikYup" element={<FormikYupPage />} />
          <Route path="FormikComponent" element={<FormikComponent />} />
          <Route path="FormikAbstract" element={<FormikAbstract />} />
          <Route path="users" element={<h1>users</h1>} />
          <Route path="login" element={<RegisterPage />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigations;
