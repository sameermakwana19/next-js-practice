import Link from "next/link";
import React from "react";

const Products = () => {
  const ARRAY = [1, 2, 3, 4, 5];
  return (
    <>
      <div>Products</div>
      <ul className="flex flex-col justify-center items-center gap-4">
        {ARRAY.map((number) => (
          <Link href={`/products/${number}`} replace>
            Product {number}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Products;
