**LazyLoad**
1 - se debe importar _lazy_ de React

2 - Los componentes que voy a utilizar con el Lazy Load deben ser exportados por defecto.
usando el export default + component name

3 - luego voy donde he creado el objeto con las rutas y preparo todo,
A- creo las importaciones d elos componentes
B - cambio la interface para que me reconozca los componentes que seran utilizados con lazy load. Ya los componentes no seran JSX.Element sino que serán LazyExoticComponent<JSXComponent> | JSXComponent
C - modifico el objeto, con la interface de arriba puedo usar en ese objetos tanto componentes con lazy load como no.

```
const Lazy1 = lazy(() => import('../01-lazyLoad/pages/LazyPages1'));
```

```
type JSX_Element = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSX_Element> | JSX_Element;
  to: string;
  name: string;
}
```

4 - armado todo en el routes.ts , vuelvo al router donde tengo todas las rutas y el NavBar definido y debo important y envolcer todo el codigo en un Suspense.
El Suspense tiene un fullBack el cual lo podemos poner para mostrar algo mientras la pagina cargue. La primera vez que cargue demora un instante, y alli aparecerá el fullback, asi por cada componente que este en lazyload mood. Pero si van a red podes ver que se carga solo un chonk una pequeña parte de toda la app, y asi es mas rapido y liviano.

**Lazy load** con rutas hijas.

1- modificar el archivo en el routes.ts. A las rutas que tendran rutas hijas que tienen lazy load en el path decretado en routes.ts se le debe agregar slash y asterisco.
