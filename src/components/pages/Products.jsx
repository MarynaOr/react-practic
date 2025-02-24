import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
    const [searchParams] = useSearchParams()
    const name = searchParams.get('name') || 'не вказано!'
    console.log(name, typeof name);// "hoodie", string
    const color = searchParams.get('color')
    const maxPrice = searchParams.get('maxPrice')

  return (
    <>
      <p>Name: {name} </p>
      <p>Color: {color}  </p>
      <p>maxPrice: {maxPrice}  </p>

       <Link to="/products/h-1" state="/dashboard?name=hoodie">
      Navigate to product h-1
    </Link>
    </>
  );
};

export default Products;



