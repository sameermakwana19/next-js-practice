import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = ({ params }) => {
  return {
    title: `product ${params.productId}`,
  };
};

const ProductId = ({ params }) => {
  if (+params.productId > 10) {
    notFound();
  }

  return <div>ProductId : {params.productId}</div>;
};

export default ProductId;
