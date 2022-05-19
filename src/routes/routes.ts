import { lazy, LazyExoticComponent } from 'react';
import NoLazy from '../01-lazyLoad/pages/NoLazy';
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
const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ '../01-lazyLoad/layout/LazyLayout'
    )
);

export const routes: Route[] = [
  {
    to: '/lazyLayout',
    name: 'lazyLayout',
    path: '/lazyLayout/*',
    Component: LazyLayout,
  },
  {
    to: '/no-lazy',
    name: 'no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
  },
];
