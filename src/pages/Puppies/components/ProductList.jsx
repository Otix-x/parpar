import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import PetProduct from "../../../components/PetProduct";
import PaginateButton from "../../../components/PaginateButton";
import { queryPetParser } from "../../../utilities/queryUtil";

const server_url = "http://localhost:5000";

const LIMIT = 6;

const ProductList = ({ queryObject }) => {
  const [page, setPage] = useState(0);
  const [puppies, setPuppies] = useState([]);
  const [puppiesCount, setPuppiesCount] = useState(0);

  useEffect(() => {
    axios
      .get(
        `${server_url}/api/pet?specie=dog&limit=${LIMIT}&page=${page}${queryPetParser(
          queryObject
        )}`
      )
      .then((res) => {
        setPuppies(res.data);
      });
  }, [page, queryObject]);

  useEffect(() => {
    axios
      .get(
        `${server_url}/api/pet/count?specie=dog${queryPetParser(queryObject)}`
      )
      .then((res) => {
        setPuppiesCount(res.data.data);
        setPage(0);
      });
  }, [queryObject]);

  const disableNext = (page + 1) * LIMIT >= puppiesCount;
  const disablePrev = page === 0;

  function getPuppiesCard() {
    return puppies.map((puppy) => (
      <PetProduct
        key={puppy.petID}
        title={puppy.gender === "m" ? "Male" : "Female"}
        label={puppy.breed.charAt(0).toUpperCase() + puppy.breed.slice(1)}
        img={`${server_url}/${puppy.url}`}
        price={puppy.price}
        available={puppy.petStatus === "a" ? true : false}
        id={puppy.petID}
      />
    ));
  }

  return puppies.length !== 0 ? (
    <div className="pb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 lg:gap-10">
        {getPuppiesCard()}
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
      Pets Not Found
    </div>
  );
};

export default ProductList;
