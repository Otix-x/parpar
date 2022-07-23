import { useState } from "react";

import Container from "../../components/Container";
import MainLayout from "../../layouts/MainLayout";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";

const Products = () => {
  const [queryObject, setQueryObject] = useState({
    forPets: [],
    stockStatus: [], // notInStock, inStock
    productTypes: [],
    price: { min: 0, max: 50000000 },
  });

  return (
    <MainLayout>
      <Container className="mt-40">
        <h2 className="text-4xl md:text-7xl font-bold text-center text-primary">
          Products
        </h2>
        <section className="flex mt-20 space-x-10">
          <Sidebar queryObject={queryObject} setQueryObject={setQueryObject} />
          <ProductList queryObject={queryObject} />
        </section>
      </Container>
    </MainLayout>
  );
};

export default Products;
