import React from "react";

const getProducts = async () => {
  const res = await fetch(`${process.env.API_ENDPOINT}/api/mock`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const BlueSrTable = async () => {
  const data = await getProducts();
  return <pre>{JSON.stringify(data)}</pre>;
};

export default BlueSrTable;
