import logo from '../logo.svg';

import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import ShoppingPage from '../02 - component-patterns/pages/ShoppingPage';
const Navigations = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/shopping"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                About
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
          <Route path="about" element={<h1>about</h1>} />
          <Route path="users" element={<h1>users</h1>} />
          <Route path="shopping" element={<ShoppingPage />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigations;
