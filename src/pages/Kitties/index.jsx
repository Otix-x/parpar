import { useState } from "react";

import Container from "../../components/Container";
import MainLayout from "../../layouts/MainLayout";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";

const Kitties = () => {
  const [queryObject, setQueryObject] = useState({
    genders: [],
    availabilities: [],
    colors: [],
    price: { min: 0, max: 50000000 },
    breeds: [],
  });

  /*
    queryObject = {
      genders: [],
      availablities: [],
      colors: [],
      price: {min: max:}
      breeds: []
    }
  */

  return (
    <MainLayout>
      <Container className="mt-40">
        <h2 className="text-4xl md:text-7xl font-bold text-center text-primary">
          Kitties
        </h2>
        <section className="flex mt-20 space-x-10">
          <Sidebar queryObject={queryObject} setQueryObject={setQueryObject} />
          <ProductList queryObject={queryObject} />
        </section>
      </Container>
    </MainLayout>
  );
};

export default Kitties;
