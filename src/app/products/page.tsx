//Nested Path example
import Link from "next/link";

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>

      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>

      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      
      <h2>
        <Link href="products/3" replace>Product 3</Link> //replace the current entry in the history stack, redirects to home in this case
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}