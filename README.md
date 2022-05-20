**interpolar estilos** usar dos estilos al mismo tiempo

```

export const ProductCard = ({
  children,
  product,
  className,
}: ProductCardProps) => {
  const { state, handleIncrease } = useProduct(0);
  return (
    <Provider value={{ state, handleIncrease, product }}>
      <div **className={`${styles.productCard} ${className}`}**>{children}</div>
    </Provider>
  );
};
```

En este caso, uno esta determinado desde la creación del componente y a lotro lo está agregando el customer con un dark style. Que lo recibo como props.

**CSS** centrar imagen
width: calc(100% - 20px);

**tener en cuenta que lo importante es ir agregando los atributos que quiero poner a cada interface y luego al componente** luego lo uso dentro del componente y listo. Acordarme de poner el signo ? para determinar que es opcional.
