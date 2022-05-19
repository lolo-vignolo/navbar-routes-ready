import logo from '../logo.svg';

import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import { LazyPages1, LazyPages2, LazyPages3 } from '../01-lazyLoad/pages';

const Navigations = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/Lazy1"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy page 1{' '}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy page 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy page 3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="Lazy1" element={<LazyPages1 />} />
          <Route path="lazy2" element={<LazyPages2 />} />
          <Route path="lazy3" element={<LazyPages3 />} />

          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigations;
