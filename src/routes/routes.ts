import { lazy, LazyExoticComponent } from 'react';
//import { LazyPages1, LazyPages2, LazyPages3 } from '../01-lazyLoad/pages';

type JSX_Element = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSX_Element> | JSX_Element;
  to: string;
  name: string;
}

// esto son componentes, puedo usarlo en lugar de los que utilizo donde pongo COmponents
//con los comentarios webpack me permite llevar un mejor seguimiento en RED.
const Lazy1 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage1" */ '../01-lazyLoad/pages/LazyPages1'
    )
);
const Lazy2 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage2" */ '../01-lazyLoad/pages/LazyPages2'
    )
);
const Lazy3 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage3" */ '../01-lazyLoad/pages/LazyPages3'
    )
);

export const routes: Route[] = [
  {
    to: '/lazy1',
    name: 'LazyPages1',
    path: 'lazy1',
    Component: Lazy1,
  },
  {
    to: '/lazy2',
    name: 'LazyPages2',
    path: 'lazy2',
    Component: Lazy2,
  },
  {
    to: '/lazy3',
    name: 'LazyPages3',
    path: 'lazy3',
    Component: Lazy3,
  },
];
