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
