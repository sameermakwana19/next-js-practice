import Link from "next/link";
import React from "react";

const Products = () => {
  const ARRAY = [1, 2, 3, 4, 5];
  return (
    <>
      <div>Products</div>
      {ARRAY.map((number) => (
        <Link href={`/products/${number}`}>Product {number}</Link>
      ))}
    </>
  );
};

export default Products;
