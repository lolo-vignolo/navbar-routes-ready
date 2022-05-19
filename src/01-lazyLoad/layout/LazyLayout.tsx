import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { LazyPages1, LazyPages2, LazyPages3 } from '../pages';

const LazyLayout = () => {
  return (
    <div>
      <h1>lazy layout pag</h1>
      <ul>
        <li>
          <NavLink
            to="lazy1"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Lazy 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="lazy2"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Lazy 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="lazy3"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Lazy 3
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={<LazyPages1 />} />

        <Route path="lazy2" element={<LazyPages2 />} />

        <Route path="lazy3" element={<LazyPages3 />} />

        <Route path="/*" element={<Navigate to="lazy1" replace />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
