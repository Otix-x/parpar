import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import ProductCard from "../../../components/ProductCard";
import PaginateButton from "../../../components/PaginateButton";
import { queryProductParser } from "../../../utilities/queryUtil";

const server_url = "http://localhost:5000";

const LIMIT = 6;

const ProductList = ({ queryObject }) => {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    axios
      .get(
        `${server_url}/api/product/?limit=${LIMIT}&page=${page}${queryProductParser(
          queryObject
        )}`
      )
      .then((res) => {
        setProducts(res.data.data);
      });
  }, [page, queryObject]);

  useEffect(() => {
    axios
      .get(
        `${server_url}/api/product/count/?${queryProductParser(queryObject)}`
      )
      .then((res) => {
        setProductsCount(res.data.data);
        setPage(0);
      });
  }, [queryObject]);

  const disableNext = (page + 1) * LIMIT >= productsCount;
  const disablePrev = page === 0;

  function getproductsCard() {
    return products.map((product) => (
      <ProductCard
        key={product.productID}
        img={`${server_url}/${product.url}`}
        id={product.productID}
        title={product.productName}
        forPet={product.productFor}
        quantity={product.stockQuantity}
        price={product.price}
      />
    ));
  }

  return products.length !== 0 ? (
    <div className="pb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 lg:gap-10">
        {getproductsCard()}
      </div>
      <div className="flex-center gap-4 mt-14">
        <PaginateButton
          disable={disablePrev}
          onSetPage={() => setPage(page - 1)}
          icon={faAngleLeft}
        />
        <PaginateButton
          disable={disableNext}
          onSetPage={() => setPage(page + 1)}
          icon={faAngleRight}
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-grow justify-center items-center font-bold text-3xl">
      Products Not Found
    </div>
  );
};

export default ProductList;
