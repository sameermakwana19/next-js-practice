import React from "react";

const slug = ({ params }) => {
  return (
    <>
      <div>slug-catchall {JSON.stringify(params.slug)}</div>
      <h1>length: {params.slug?.length || 0} </h1>
    </>
  );
};

export default slug;
