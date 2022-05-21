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

**se puede extender una interface** o sea tomar otra de base y agregarle atributos
Ademas puedo poner por ejemplo que en este caso un _useState_ tendra x numbers de algo, para realizarlo utilizo la siguiente escritura : **[ket: string]**

```
interface ProdcutInCart **extends** Product {
  count: number;
}

const listOFProducts: Product[] = [product_1, product_2];

const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [ket: string]: ProdcutInCart;
  }>({});

```

**onChange()** puede ser onChange o ponerle pepeLopes(), lo que hace solamente es levantar el evento o bien agarrar la info para luego trabajarla en la funcion, y en este paso pasarme info del evento que se lleva a cabo. Pero no está relacionado con el cambio en el state, eso lo hace el boton y el hook useProduct.
A la vez ese onChange debe recibir la info con la que va a trabajar y donde voy a sacar las concluciones para ver que producto en este caso va a aumentar o disminuir sus cantidades. Para eso debo ir hasta el fonde del onChange y agregarlos los argumentos que va a recibir, esos son dos _el producto_ y el _estado o counter_ que son las cantidades. Para lo cual cree un interface de como deben ser los argumentos que este onChange recibe y realizo los cambios primero en el ProductCard desde donde esto enviand oel onChange al customHokk como asi tambien el producto al que me estoy refirindo. Luego en el customHook resuelvo el resto.

**como cambiar el estado al mismo tiempo** todo se remonta a la duncion inicial del custom hook la que recibe como argumento un valor numerico que se lo doy en el button. Hasta el momento ese argumento estaba vivo solo en el button y era 1 o menos 1. Lo que sucede es que si yo lo logro traer al coomponente principal y le puedo cambiar su valor, puedo hacer que el valor inicial del custom hook varie. Al ponerlo en el componente padre me permite:
1- tomo el valor del estado de la otra tarjeta.
2 - a ese valor del estado actual se o pongo al value
3- ese value es el que voy a utilizar para farle valor al estado de la tarjeta que no estoy apretando ningun boton pero necesito que se modifique., teniendo en cuenta lo que se sucede en la otra tarjeta.
conclucion: _con el estado de una tarjeta, le doy valor al value, el cual luego utilizo para cambiar el estado de la otra tarjeta_.

**carta principal, cambiar value teniendo en cuenta carta carrito**, en este caso debo darle un nuevo valor al _value_ tambien, pero este debo extraerlo del shoppingCart, que es basicamente el siguiente objeto

```
{"1":{"id":"1","img":"./coffee-mug.png","name":"Coffee Mug","count":6},"2":{"id":"2","img":"./coffee-mug2.png","name":"Coffee Mug","count":3}}
```

entonces para alcanzar el valor del _count_ debo llegar a el usando desestructuración. Por lo que el valor del value para x carta será **shoppingCart[product.id].count** .

**lo que varía entre pasar de hija a padre y padre a hija** en la hija ya tengo el objetodesestructurado por lo cual ya estoy trabajando al nivel de **product**, en el padre tengo que hacer eso paso mas. Lo importante a tener en cuenta esque la fuente de información en las dos es la misma el **shoppingCart**.
